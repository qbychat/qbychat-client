import {Service} from "./service.ts";

class ChatService extends Service {
    serviceName: string = "org.cubewhy.qbychat.service.ChatService";

}

const chatService = new ChatService();

export { chatService };