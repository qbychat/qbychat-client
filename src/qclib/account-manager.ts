import {connectionManager} from "./conn-manager.ts";
import {qbychat} from "../proto/proto";
import TokenUpdateEvent = qbychat.websocket.auth.TokenUpdateEvent;

class AccountManager {

}

const accountManager = new AccountManager();

// register events
connectionManager.registerEventHandler(TokenUpdateEvent.getTypeUrl(), async (account,  payload) => {
    // parse payload
    const event = TokenUpdateEvent.decode(payload);
    // todo save token
    console.log(`JWT Received ${account}: ${event.token}`)
})

export {accountManager};