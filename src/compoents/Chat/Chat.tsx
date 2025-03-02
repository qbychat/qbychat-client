import {FaPaperPlane} from "react-icons/fa6";
import Avatar from "../Avatar/Avatar.tsx";
import {useChat} from "../../qclib/react-hooks.ts";
import {LiaCheckDoubleSolid} from "react-icons/lia";
import {FaSearch} from "react-icons/fa";
import {GiHamburgerMenu} from "react-icons/gi";

interface Props {
    chatId: string;
}

function Chat(props: Props) {
    const chat = useChat(props.chatId);

    return <div className="flex flex-col h-full dark:bg-base-200">
        {/* Header */}
        <div className="flex-none p-3 border-b dark:border-gray-700">
            <div className={"flex flex-row justify-between items-center"}>
                <div className={"flex flex-row gap-2"}>
                    <Avatar showName={chat?.title || 'unknown'} chatId={props.chatId} size={'2.3rem'}/>
                    <div className={"flex flex-col"}>
                    <span className="font-semibold dark:text-white">
                        {chat?.title}
                    </span>
                        {/*todo chat type*/}
                        {/*<span className={"text-sky-500"}>Online</span>*/}
                        <span className={"text-gray-500"}>100 members</span>
                        {/*<span className={"text-gray-500"}>Last seen at 8:00 AM</span>*/}
                    </div>
                </div>
                <div className={"flex flex-row gap-2"}>
                    <div className={"flex flex-row gap-3 dark:text-gray-500"}>
                        <FaSearch size={18} className={"cursor-pointer hover:text-gray-300"}/>
                        <GiHamburgerMenu size={18} className={"cursor-pointer hover:text-gray-300"}/>
                    </div>
                </div>
            </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-4">
                <div className={"flex flex-row gap-2"}>
                    {/*todo username*/}
                    <Avatar showName={"User"} username={"todo:unknown username"} size={'2rem'}/>
                    <div className="bg-blue-100 dark:bg-blue-800 p-3 rounded-lg w-fit text-wrap">
                        <p className="text-sm dark:text-white">hello</p>
                    </div>
                </div>

                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg w-fit ml-auto">
                    <p className="text-sm dark:text-white">hello!</p>
                    <div className="flex items-center justify-end space-x-1 mt-1">
                        {/*<LiaCheckSolid className="text-gray-500 dark:text-gray-400"/>*/}
                        <LiaCheckDoubleSolid className="text-gray-500 dark:text-gray-400" size={15}/>
                    </div>
                </div>
            </div>
        </div>

        {/* Input Box */}
        <div className="flex-none p-4 border-t dark:border-gray-700">
            <div className="flex items-center space-x-2">
                <input
                    type="text"
                    placeholder="Type a message..."
                    className="flex-1 p-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <FaPaperPlane size={15}/>
                </button>
            </div>
        </div>
    </div>;
}

export default Chat;