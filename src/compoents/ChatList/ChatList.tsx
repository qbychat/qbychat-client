import {Chat} from "../../qclib/database.ts";
import ChatListItem from "./ChatListItem.tsx";
import {useEffect, useState} from "react";
import WelcomeTip from "../WelcomeTip/WelcomeTip.tsx";
import {useChats} from "../../qclib/react-hooks.ts";

interface Props {
    onSwitchChat: (chatId: string) => void;
    currentChat: string;
}

function ChatList(props: Props) {
    const chats = useChats();
    const [showWelcomeTip, setShowWelcomeTip] = useState(false);

    useEffect(() => {
        setShowWelcomeTip(!chats || chats.length === 0);
    }, [chats]);

    return <div className={showWelcomeTip ? "flex justify-center items-center h-full" : ""}>
        {(showWelcomeTip || !chats) ? <WelcomeTip/> : <ul role={"list"}>
            {chats.map((chat: Chat) => {
                return <ChatListItem chat={chat} key={chat.id} current={props.currentChat === chat.remoteId} onClick={props.onSwitchChat}/>
            })}
        </ul>}
    </div>;
}

export default ChatList;