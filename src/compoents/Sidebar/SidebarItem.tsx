import * as React from "react";

interface Props {
    icon: React.ReactNode;
    text: string;
    onClick?: () => void;
}

function SidebarItem(props: Props) {
    return <div className={"flex flex-row gap-3 p-2 rounded w-full hover:dark:bg-gray-500 hover:bg-gray-400 cursor-pointer"} onClick={props.onClick}>
        <div className={"p-1"}>
            {props.icon}
        </div>
        {props.text}
    </div>;
}

export default SidebarItem;