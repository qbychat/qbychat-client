import {qbychat} from "../proto/proto";
import TokenUpdateEvent = qbychat.websocket.auth.TokenUpdateEvent;
import {eventManger} from "./event-manager.ts";
import {configManager, KEY_ACTIVE_ACCOUNT} from "./config-manager.ts";

class AccountManager {
    private serviceName: string = "qbychat";

    async saveToken(account: string, token: string): Promise<void> {
        // return keytar.setPassword(this.serviceName, account, token);
        return window.electron.saveAccountToken(this.serviceName, account, token);
    }

    async getActiveAccount(): Promise<string | null> {
        return configManager.get(KEY_ACTIVE_ACCOUNT);
    }

    async switchAccount(account: string | null): Promise<void> {
        await eventManger.publishEvent("switch-account", null, account);
        return configManager.set(KEY_ACTIVE_ACCOUNT, account);
    }

    async getToken(account: string): Promise<string> {
        return window.electron.getAccountToken(this.serviceName, account);
    }

    /**
     * Return a list that includes all authorized accounts
     *
     * @return account list
     * */
    async listAccounts(): Promise<string[]> {
        return (await window.electron.findCredentials(this.serviceName)).map(credential => credential.account);
    }

    async deleteAccount(account: string) {
        const currentAccount = await this.getActiveAccount();
        console.log(`Deleting account ${account}`);
        if (currentAccount === account) {
            await this.switchAccount(null);
        }
        // delete from token store
        await window.electron.deleteAccount(this.serviceName, account);
        await eventManger.publishEvent("delete-account", null, account);
    }
}

const accountManager = new AccountManager();

// register events
eventManger.registerEventHandler(TokenUpdateEvent.getTypeUrl(), async (account, payload) => {
    // parse payload
    const event = TokenUpdateEvent.decode(payload as Uint8Array);
    // save token
    await accountManager.saveToken(account!, event.token);
})

export {accountManager};