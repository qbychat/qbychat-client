import {Chat} from "../../qclib/database.ts";
import ChatListItem from "./ChatListItem.tsx";
import {useEffect, useState} from "react";
import WelcomeTip from "../WelcomeTip/WelcomeTip.tsx";
import {useChats} from "../../qclib/react-hooks.ts";

// interface Props {
//     user: Account | null | undefined
// }

function ChatList() {
    const chats = useChats();
    const [showWelcomeTip, setShowWelcomeTip] = useState(false)

    useEffect(() => {
        setShowWelcomeTip(!chats || chats.length === 0);
    }, [chats]);

    return <div className={showWelcomeTip ? "flex justify-center items-center h-full" : ""}>
        {(showWelcomeTip || !chats) ? <WelcomeTip/> : chats.map((chat: Chat) => {
            return <ChatListItem chat={chat} key={chat.id}/>
        })}
    </div>;
}

export default ChatList;