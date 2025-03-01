import {Service} from "./service.ts";
import {qbychat} from "../../proto/proto";
import {accountManager} from "../account-manager.ts";
import {eventManger} from "../event-manager.ts";
import {db} from "../database.ts";
import RegisterRequest = qbychat.websocket.user.RegisterRequest;
import RegisterResponse = qbychat.websocket.user.RegisterResponse;
import UsernamePasswordLoginResponse = qbychat.websocket.auth.UsernamePasswordLoginResponse;
import UsernamePasswordLoginRequest = qbychat.websocket.auth.UsernamePasswordLoginRequest;
import TokenLoginResponse = qbychat.websocket.auth.TokenLoginResponse;
import TokenLoginRequest = qbychat.websocket.auth.TokenLoginRequest;
import LoginStatus = qbychat.websocket.auth.LoginStatus;
import TokenUpdateEvent = qbychat.websocket.auth.TokenUpdateEvent;
import user = qbychat.websocket.user;

class UserService extends Service {
    serviceName: string = "org.cubewhy.qbychat.service.UserService";

    async register(username: string, password: string): Promise<RegisterResponse> {
        // register an account
        const payload = RegisterRequest.create({
            username: username,
            password: password,
        })
        // send request
        const response = await this.request("Register", RegisterRequest.encode(payload).finish(), null)
        // parse payload
        return RegisterResponse.decode(response!);
    }

    async basicLogin(username: string, password: string): Promise<UsernamePasswordLoginResponse> {
        const payload = UsernamePasswordLoginRequest.create({
            username: username,
            password: password,
        })
        // send request
        const response = await this.request("UsernamePasswordLogin", UsernamePasswordLoginRequest.encode(payload).finish(), null);
        // push event
        // parse payload
        return UsernamePasswordLoginResponse.decode(response!);
    }

    async tokenLogin(token: string): Promise<TokenLoginResponse> {
        const request = TokenLoginRequest.create({
            token: token,
        })
        // send request
        return TokenLoginResponse.decode(await this.request("TokenLogin", TokenLoginRequest.encode(request).finish()));
    }

    async autoLogin(accounts: string[]) {
        for (const account of accounts) {
            console.log(`Starting auto login process for account: ${account}`);
            // get token
            const token = await accountManager.getToken(account);
            // send login packet
            const response = await this.tokenLogin(token);
            switch (response.status) {
                case LoginStatus.SUCCESS:
                    console.log(`Success authorized with account ${account}`);
                    // sync
                    await this.sync(account);
                    break;
                case LoginStatus.USER_NOT_FOUND:
                    console.error(`Failed authorized with account ${account} (user deleted)`);
                    await accountManager.deleteAccount(account); // delete when expired
                    break;
                case LoginStatus.SESSION_TERMINATED:
                case LoginStatus.BAD_TOKEN:
                case LoginStatus.TOKEN_EXPIRED:
                    console.error(`Failed authorized with account ${account} (session was terminated)`)
                    await accountManager.deleteAccount(account); // delete when expired
                    break;
            }
        }
    }

    async sync(account: string): Promise<void> {
        const response0 = await this.request("Sync", null, account)
        const response = user.SyncResponse.decode(response0);
        const resUser = response.user!;
        // find current user
        const userData = {
            remoteId: account,
            roles: resUser.roles!,
            bio: resUser.bio!,
            username: resUser.username!,
            nickname: resUser.nickname!,
        };

        const existingUser = await db.accounts
            .where('remoteId')
            .equals(account)
            .first();

        if (existingUser) {
            // exist, update
            await db.accounts
                .where('remoteId')
                .equals(account)
                .modify(userData);
        } else {
            // not exist, create
            await db.accounts.add(userData);
        }
    }
}

eventManger.registerEventHandler(TokenUpdateEvent.getTypeUrl(), async (account) => {
    // do sync
    await userService.sync(account!);
})

eventManger.registerEventHandler("connected", async () => {
    // process autologin
    const accounts = await accountManager.listAccounts();
    await userService.autoLogin(accounts);
    // broadcast event
    await eventManger.publishEvent("authorized", null)
})

const userService = new UserService();

export {userService};