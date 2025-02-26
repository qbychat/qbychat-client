import {connectionManager} from "../conn-manager.ts";

export abstract class Service {
    abstract serviceName: string;

    async request(method: string, payload: Uint8Array, user: string | null = null, timeout: number = 5000): Promise<Uint8Array> {
        return connectionManager.request(user, this.serviceName, method, payload,timeout);
    }
}