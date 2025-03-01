import {useEffect, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import axios from 'axios';
import {qbychat} from '../proto/proto';
import {
    bytesToAESKey,
    computeSharedSecret,
    decryptAESGCM,
    encryptAESGCM,
    exportPublicKey,
    generateECDHKeyPair,
    generateSalt,
    getECDHPublicKeyFromBytes,
    hkdfSha256
} from "../utils/crypto-utils.ts";
import ClientboundMessage = qbychat.websocket.protocol.ClientboundMessage;
import ServerboundMessage = qbychat.websocket.protocol.ServerboundMessage;
import Request = qbychat.websocket.protocol.Request;
import protocol = qbychat.websocket.protocol;
import {eventManger} from "./event-manager.ts";
import {clientMetadata} from "./client-metadata.ts";

interface QbyChatConfig {
    websocketPath: string;
}

async function blobToByteArray(blob: Blob) {
    const buffer = await new Response(blob).arrayBuffer();
    return new Uint8Array(buffer);
}

class ConnectionManager {
    private ws: WebSocket | null = null;
    private status: 'disconnected' | 'connecting' | 'connected' | 'handshake' | 'error' | 'reconnecting' | 'unset' | 'bad-server' = 'unset';
    private url: string = '';
    private ecdhKeyPair: CryptoKeyPair | null = null;
    private ecdhSalt: Uint8Array | null = null;
    private aesKeyInfo: Uint8Array = new TextEncoder().encode("QBYCHATAES")
    private aesKeyLength: number = 32;
    private aesKey: CryptoKey | null = null;
    private reconnectAttempts: number = 0;
    private reconnectDelay: number = 3000;
    private reconnectTimer: NodeJS.Timeout | null = null;
    private messageQueue: Uint8Array[] = [];

    private responseHandlers: Map<string, (response: protocol.IResponse) => void> = new Map();

    constructor() {
        // register events
        eventManger.registerEventHandler("authorized", async () => {
            // send queued messages
            this.messageQueue.forEach(message => this.sendMessage(message));
        })
    }

    getStatus() {
        return this.status;
    }

    async receiveConfigAndConnect(baseUrl: string) {
        // request the config endpoint
        try {
            const response = await axios.get<QbyChatConfig>(`${baseUrl}/.well-known/qbychat/conn-config`);
            const websocketUrl = baseUrl + response.data.websocketPath
            console.log("Connecting to " + websocketUrl);
            this.connect(websocketUrl);
        } catch (e) {
            console.error(e);
            if (axios.isAxiosError(e)) {
                this.status = 'bad-server';
            } else {
                this.status = 'error';
            }
            throw e;
        }
    }

    connect(url: string): void {
        if (this.ws && this.ws.readyState === WebSocket.OPEN) {
            // close current connection
            this.disconnect();
        }

        this.url = url;
        this.status = 'connecting';
        this.ws = new WebSocket(url);

        this.ws.onopen = () => {
            this.status = 'handshake';
            this.reconnectAttempts = 0;
            if (this.reconnectTimer) {
                clearTimeout(this.reconnectTimer); // clear reconnect timer
            }
            console.log('WebSocket connected, start handshake');
            this.handshake();
        };

        this.ws.onmessage = async (e: MessageEvent) => {
            let uint8Array = await blobToByteArray(e.data);
            if (this.aesKey) {
                // decrypt bytearray
                console.log("Received encrypted message");
                uint8Array = await decryptAESGCM(uint8Array, this.aesKey);
            } else {
                console.log("Received message (unencrypted)");
            }
            const message = ClientboundMessage.decode(uint8Array);
            await this.process(message);
        }

        this.ws.onclose = () => {
            // clear encrypt info
            this.aesKey = null
            this.ecdhSalt = null
            if (this.status === 'disconnected') return; // manual closed by client, skip reconnect
            this.status = 'disconnected';
            console.log('WebSocket disconnected');
            this.attemptReconnect();
        };

        this.ws.onerror = (error) => {
            this.status = 'error';
            console.error('WebSocket error', error);
        };
    }

    private async handshake() {
        this.ecdhKeyPair = await generateECDHKeyPair();
        this.ecdhSalt = generateSalt();
        const clientHandshake = qbychat.websocket.protocol.ClientHandshake.create({
            clientInfo: qbychat.websocket.protocol.ClientInfo.create({
                name: await clientMetadata.getClientName(),
                version: await clientMetadata.getClientVersion(),
                installationId: await clientMetadata.getInstallationId()
            }),
            publicKey: await exportPublicKey(this.ecdhKeyPair.publicKey),
            aesKeySalt: this.ecdhSalt,
            aesKeyLength: this.aesKeyLength,
            aesKeyInfo: this.aesKeyInfo
        })
        const message = qbychat.websocket.protocol.ServerboundMessage.create({
            clientHandshake: clientHandshake
        })
        // send the handshake packet
        await this.sendMessage(qbychat.websocket.protocol.ServerboundMessage.encode(message).finish())
    }

    private async process(message: ClientboundMessage) {
        if (message.serverHandshake) {
            // handshake packet
            this.status = 'connected';
            console.log("Success received handshake packet");
            // calc aes key
            const parsedPublicKey = await getECDHPublicKeyFromBytes(message.serverHandshake.publicKey!)
            const secret = await computeSharedSecret(this.ecdhKeyPair!.privateKey, parsedPublicKey)
            const sharedAESKey = await hkdfSha256(secret, this.ecdhSalt!, this.aesKeyInfo, this.aesKeyLength)
            console.log("AES Key received.")
            // save
            this.aesKey = await bytesToAESKey(sharedAESKey);
            // broadcast event
            await eventManger.publishEvent("connected", null);
            return;
        }
        // process response packet
        if (message.response) {
            const response = message.response;
            console.log(`Response! Ticket is ${response.ticket}`)
            const requestHandler = this.responseHandlers.get(response.ticket!);
            if (requestHandler) {
                // handle
                requestHandler(response);
                this.responseHandlers.delete(response.ticket!); // Clean up the handler after it has been called
            }
        }
        // handle events
        if (message.event) {
            const event = message.event!;
            console.info("Received event:", event.type_url);
            // publish event
            await eventManger.publishEvent(event.type_url!, event.value!, message.account);
        }
    }

    private attemptReconnect(): void {
        this.status = 'reconnecting';
        console.log(`Attempting to reconnect... (${this.reconnectAttempts + 1})`);
        this.reconnectAttempts++;

        this.reconnectTimer = setTimeout(() => {
            this.connect(this.url);
        }, this.reconnectDelay);
    }

    async sendMessage(message: Uint8Array) {
        if (this.ws && this.ws.readyState === WebSocket.OPEN) {
            if (this.aesKey) {
                // encrypt & send
                console.debug("Sending message with encryption")
                this.ws.send(await encryptAESGCM(message, this.aesKey))
            } else {
                console.debug("Sending message (unencrypted)")
                this.ws.send(message);
            }
        } else {
            console.log("Stage message to queue (websocket offline)")
            this.messageQueue.push(message);
        }
    }

    async request(account: string | null, service: string, method: string, payload: Uint8Array | null, timeout: number = 5000): Promise<Uint8Array> {
        // send request packet
        const ticket = uuidv4();
        if (!payload) {
            payload = new Uint8Array()
        }
        const request = Request.create({
            ticket: ticket,
            method: method,
            service: service,
            payload: payload,
        });
        const message = ServerboundMessage.create({
            account: account,
            request: request
        });
        console.log(`Send request ${service}:${method} to backend`)
        await this.sendMessage(ServerboundMessage.encode(message).finish()); // send request
        return new Promise<Uint8Array>((resolve, reject) => {
            // Set a timeout to reject the promise after the specified time
            const timeoutId = setTimeout(() => {
                // If the timeout occurs, reject the promise
                console.error(`Request with ticket ${ticket} timed out after ${timeout}ms`);
                this.responseHandlers.delete(ticket); // Clean up the ticket from the map
                reject(new Error(`Request timed out after ${timeout}ms`));
            }, timeout);

            const callback = (response: protocol.IResponse) => {
                // clean timeout
                clearTimeout(timeoutId);
                resolve(response.payload!);
            }
            // add to response handlers
            this.responseHandlers.set(ticket, callback);
        });
    }



    disconnect(): void {
        if (this.ws) {
            this.ws.close();
            this.status = 'disconnected';
            console.log("Closing current session...");
            console.log('WebSocket connection closed');
        }

        if (this.reconnectTimer) {
            clearTimeout(this.reconnectTimer);
        }
    }
}

const connectionManager = new ConnectionManager();

export function useConnectionStatus() {
    const [status, setStatus] = useState(connectionManager.getStatus());

    useEffect(() => {
        const interval = setInterval(() => {
            setStatus(connectionManager.getStatus());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return status;
}

export {connectionManager};
