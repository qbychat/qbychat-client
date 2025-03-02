import {Service} from "./service.ts";
import {qbychat} from "../../proto/proto";
import {Chat, db} from "../database.ts";
import CreateGroupRequest = qbychat.websocket.chat.CreateGroupRequest;
import CreateGroupResponse = qbychat.websocket.chat.CreateGroupResponse;
import chat = qbychat.websocket.chat;
import {eventManger} from "../event-manager.ts";
import AddChatEvent = qbychat.websocket.chat.AddChatEvent;
import IChat = qbychat.websocket.chat.IChat;
import _ from "lodash";

class ChatService extends Service {
    serviceName: string = "org.cubewhy.qbychat.service.ChatService";

    async createGroup(account: string, title: string): Promise<CreateGroupResponse> {
        const request = CreateGroupRequest.create({
            title: title
        });
        const response = CreateGroupResponse.decode(await this.request("CreateGroup", CreateGroupRequest.encode(request).finish(), account));
        console.log(`Group ${title} was created successfully.`);
        return response;
    }

    async sync(account: string) {
        const response0 = await this.request("Sync", chat.SyncRequest.encode(chat.SyncRequest.create({})).finish(), account);
        // parse response
        const response = chat.SyncResponse.decode(response0);
        // compare & update chats
        for (const remoteChat of response.chats) {
            await this.updateChat(account, remoteChat);
        }
        // compare & remove deleted chats
        const chats = await db.chats
            .where('account')
            .equals(account)
            .toArray();
        const chatIds = response.chats.map((chat) => chat.chatId)
        for (const chat1 of chats) {
            if (!chatIds.includes(chat1.remoteId)) {
                // remove from chats
                await db.chats.delete(chat1.id);
            }
        }
    }

    async updateChat(account: string, chat: IChat) {
        console.log(`Sync chat data ${chat.title}`);
        const chatData: Chat = {
            id: undefined,
            account: account,
            remoteId: chat.chatId!,
            name: chat.name,
            title: chat.title!,
            description: chat.description,
            type: chat.type!,
        };

        const existingChat = await db.chats
            .where('account')
            .equals(account)
            .and((localChat) => localChat.remoteId === chat.chatId!)
            .first();

        // compare difference
        const remoteChatWithoutId = _.omit(chatData, 'id');
        const localChatWithoutId = _.omit(existingChat, 'id');

        const hasDifferences = !_.isEqual(remoteChatWithoutId, localChatWithoutId);
        if (!hasDifferences) return;

        if (existingChat) {
            // exist, update
            await db.chats
                .where('remoteId')
                .equals(chat.chatId!)
                .modify(chatData);
        } else {
            // not exist, create
            await db.chats.add(chatData);
        }
    }
}

eventManger.registerEventHandler(AddChatEvent.getTypeUrl(), async (account, payload) => {
    const chat = AddChatEvent.decode(payload as Uint8Array).chat;
    await chatService.updateChat(account!, chat!);
})

const chatService = new ChatService();

export {chatService};