import {useState} from "react";
import TitleBar from "../TitleBar/TitleBar.tsx";
import ChatList from "../ChatList/ChatList.tsx";
import {useUser} from "../../qclib/react-hooks.ts";
import {Panel, PanelGroup, PanelResizeHandle} from "react-resizable-panels";
import Chat from "../Chat/Chat.tsx";
import Sidebar from "../Sidebar/Sidebar.tsx";

function ChatPage() {
    // const [searchParams] = useSearchParams();

    const user = useUser();

    const [currentChat, setCurrentChat] = useState("")
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    const handleSwitchChat = (chat: string) => {
        setCurrentChat(chat);
    }

    return <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle"/>
        <div className="drawer-content min-h-screen ">
            {/*content*/}
            <PanelGroup autoSaveId="chat-main" direction="horizontal">
                <Panel defaultSize={25} maxSize={50} minSize={25} className={"h-full"}>
                    <TitleBar user={user} isDrawerOpen={isDrawerOpen} setDrawerOpen={setIsDrawerOpen} />
                    <div className={"h-full flex flex-col dark:bg-base-200 rounded-r select-none"}>
                        <ChatList onSwitchChat={handleSwitchChat} currentChat={currentChat}/>
                    </div>
                </Panel>
                <PanelResizeHandle/>
                <Panel>
                    {!currentChat ? <div className={"min-h-screen flex items-center justify-center select-none"}>
                        <div className={"rounded-full py-1 px-2 dark:bg-gray-700 bg-gray-400 backdrop-shadow-xl shadow-xl"}>
                            Select a chat to start
                        </div>
                    </div> : <div className={"h-full"}><Chat chatId={currentChat}/></div>}
                </Panel>
            </PanelGroup>
        </div>
        <div className={"drawer-side"}>
            {/*drawer*/}
            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-72 p-4">
                <Sidebar user={user}/>
            </ul>
        </div>
    </div>

}

export default ChatPage;