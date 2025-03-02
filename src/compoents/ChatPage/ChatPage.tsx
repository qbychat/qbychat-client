import {useState} from "react";
import TitleBar from "../TitleBar/TitleBar.tsx";
import ChatList from "../ChatList/ChatList.tsx";
import {useUser} from "../../qclib/react-hooks.ts";
import {Panel, PanelGroup, PanelResizeHandle} from "react-resizable-panels";
import Chat from "../Chat/Chat.tsx";

function ChatPage() {
    // const [searchParams] = useSearchParams();

    const user = useUser();

    const [currentChat, setCurrentChat] = useState("")

    const handleSwitchChat = (chat: string) => {
        setCurrentChat(chat);
    }

    return <PanelGroup autoSaveId="chat-main" direction="horizontal">
        <Panel defaultSize={25} maxSize={50} minSize={25} className={"h-full"}>
            <div className={"h-full flex flex-col dark:bg-base-200 rounded-r select-none"}>
                <TitleBar user={user}/>
                <div className={"h-full mx-2 overflow-y-auto"}>
                    <ChatList onSwitchChat={handleSwitchChat} currentChat={currentChat}/>
                </div>
            </div>
        </Panel>
        <PanelResizeHandle/>
        <Panel>
            <div>
                {!currentChat ? <div className={"min-h-screen flex items-center justify-center select-none"}>
                    <div className={"rounded-full py-1 px-2 dark:bg-gray-700 bg-gray-400 backdrop-shadow-xl shadow-xl"}>
                        Select a chat to start
                    </div>
                </div> : <Chat chatId={currentChat}/>}
            </div>
        </Panel>
    </PanelGroup>;
}

export default ChatPage;