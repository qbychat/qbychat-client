import {useEffect, useState} from 'react';
import axios from 'axios';
import {qbychat} from '../proto/proto';
import {
    computeSharedSecret,
    exportPublicKey,
    generateECDHKeyPair,
    generateSalt,
    getECDHPublicKeyFromBytes
} from "../utils/crypto-utils.ts";

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
    private ecdhKeyPair: CryptoKeyPair = null;
    private ecdhSalt: Uint8Array = Uint8Array.from([0, 0]);
    private reconnectAttempts: number = 0;
    private reconnectDelay: number = 3000;
    private reconnectTimer: NodeJS.Timeout | null = null;

    constructor() {
    }

    getStatus() {
        return this.status;
    }

    async receiveConfigAndConnect(baseUrl: string) {
        // request the config endpoint
        try {
            const response = await axios.get<QbyChatConfig>(`${baseUrl}/.well-known/qbychat-config`);
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
            const uint8Array = await blobToByteArray(e.data)
            // todo parse encrypted
            const message = qbychat.websocket.protocol.ClientboundMessage.decode(uint8Array);
            await this.process(message);
        }

        this.ws.onclose = () => {
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
                name: "QbyChat Desktop",
                version: '1.0.0', // todo client version
            }),
            publicKey: await exportPublicKey(this.ecdhKeyPair.publicKey),
            aesKeySalt: this.ecdhSalt,
            aesKeyLength: 32
        })
        const message = qbychat.websocket.protocol.ServerboundMessage.create({
            clientHandshake: clientHandshake
        })
        // send the handshake packet
        this.sendMessage(qbychat.websocket.protocol.ServerboundMessage.encode(message).finish())
    }

    private async process(message: qbychat.websocket.protocol.ClientboundMessage) {
        if (message.serverHandshake) {
            // handshake packet
            this.status = 'connected';
            console.log("Success handshake");
            // calc aes key
            const parsedPublicKey = await getECDHPublicKeyFromBytes(message.serverHandshake.publicKey!)
            const secret = await computeSharedSecret(this.ecdhKeyPair.privateKey, parsedPublicKey)
            // todo calc aes key
            return;
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

    sendMessage(message: Uint8Array): void {
        if (this.ws && this.ws.readyState === WebSocket.OPEN) {
            this.ws.send(message);
        } else {
            // todo add to queue
        }
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
