import {configManager} from "./config-manager.ts";

class ClientMetadata {
    async getClientVersion() {
        return await window.electron.getVersion();
    }

    async getClientName() {
        return await window.electron.getClientName();
    }

    async getInstallationId(): Promise<string> {
        return await configManager.get("installation-id");
    }
}

const clientMetadata = new ClientMetadata();

export {clientMetadata};