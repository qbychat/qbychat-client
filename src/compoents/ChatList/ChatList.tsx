import ChatListItem from "./ChatListItem.tsx";
import {useEffect, useState} from "react";
import WelcomeTip from "../WelcomeTip/WelcomeTip.tsx";
import {AutoSizer, List} from 'react-virtualized';
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

    const renderChatItem = ({index, key, style}: { index: number; key: string; style: React.CSSProperties }) => {
        const chat = chats![index];
        return (
            <div key={key} style={style}>
                <ChatListItem
                    chat={chat}
                    current={props.currentChat === chat.remoteId}
                    onClick={() => props.onSwitchChat(chat.remoteId)}
                />
            </div>
        );
    };

    return <div className={showWelcomeTip ? "flex justify-center items-center h-full" : 'h-full'}>
        {(showWelcomeTip || !chats) ? <WelcomeTip/> : <AutoSizer>
            {({width, height}) => (
                <List
                    width={width - 5}
                    height={height - 5}
                    rowCount={chats.length}
                    rowHeight={65}
                    rowRenderer={renderChatItem}
                />
            )}
        </AutoSizer>}
    </div>;
}

export default ChatList;