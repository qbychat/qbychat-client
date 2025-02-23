import {connectionManager} from "../conn-manager.ts";
import {qbychat} from "../../proto/proto";
import protocol = qbychat.websocket.protocol;

export abstract class Service {
    abstract serviceName: string;

    async request(method: string, payload: Uint8Array, user: string | null, timeout: number = 5000): Promise<protocol.IResponse> {
        return connectionManager.request(user, this.serviceName, method, payload,timeout);
    }
}