import {Service} from "./service.ts";
import {qbychat} from "../../proto/proto";
import RegisterRequest = qbychat.websocket.user.RegisterRequest;
import RegisterResponse = qbychat.websocket.user.RegisterResponse;

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
        return RegisterResponse.decode(response.payload!);
    }
}

const userService = new UserService();

export {userService};