import {useEffect, useState} from 'react';
import axios from 'axios';

interface QbyChatConfig {
    websocketPath: string;
}

class ConnectionManager {
    private ws: WebSocket | null = null;
    private status: 'disconnected' | 'connecting' | 'connected' | 'error' | 'reconnecting' | 'unset' | 'bad-server' = 'unset';
    private url: string = '';
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
            this.status = 'connected';
            this.reconnectAttempts = 0;
            if (this.reconnectTimer) {
                clearTimeout(this.reconnectTimer); // clear reconnect timer
            }
            console.log('WebSocket connected');
        };

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

    private attemptReconnect(): void {
        this.status = 'reconnecting';
        console.log(`Attempting to reconnect... (${this.reconnectAttempts + 1})`);
        this.reconnectAttempts++;

        this.reconnectTimer = setTimeout(() => {
            this.connect(this.url);
        }, this.reconnectDelay);
    }

    sendMessage(message: string): void {
        if (this.ws && this.ws.readyState === WebSocket.OPEN) {
            this.ws.send(message);
            console.log('Message sent:', message);
        } else {
            console.log('WebSocket is not connected.');
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
