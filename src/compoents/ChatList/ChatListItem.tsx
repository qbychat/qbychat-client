import Avatar from "../Avatar/Avatar.tsx";
import {Chat} from "../../qclib/database.ts";

interface Props {
    chat: Chat;
    onClick?: (chatId: string) => void;
    current: boolean;
}

function ChatListItem(props: Props) {
    const handleClick = () => {
        if (props.onClick) {
            props.onClick(props.chat.remoteId);
        }
    }

    return <li className={`flex justify-between group gap-x-6 py-2 cursor-pointer ${props.current ? 'bg-gray-600' : 'hover:bg-gray-500'} rounded`} onClick={handleClick}>
        <div className="flex min-w-0 gap-x-4">
            <div className={"size-12 flex-none rounded-full"}>
                <Avatar chatId={props.chat.remoteId} showName={props.chat.title}/>
            </div>
            <div className="min-w-0 flex-auto">
                <p className="text-sm/6 font-semibold text-gray-900 dark:text-white whitespace-nowrap overflow-hidden text-ellipsis">{props.chat.title}</p>
                <p className={`mt-1 truncate text-xs/5 ${props.current ? 'text-gray-300' : 'text-gray-500 group-hover:text-gray-300'} whitespace-nowrap overflow-hidden text-ellipsis`}>LATEST MESSAGE (TODO)</p>
            </div>
        </div>
    </li>;
}

export default ChatListItem;