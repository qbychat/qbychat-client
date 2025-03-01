import {useState} from "react";
import SidebarItem from "./SidebarItem.tsx";
import {FaUser} from "react-icons/fa";
import Divider from "../Divider/Divider.tsx";
import {FaBookmark, FaBullhorn, FaGear, FaRegCircleUser, FaUserGroup} from "react-icons/fa6";
import Avatar from "../Avatar/Avatar.tsx";
import CreateGroupDialog from "../CreateGroupDialog/CreateGroupDialog.tsx";
import {Dialog, DialogPanel} from "@headlessui/react";
import {Account} from "../../qclib/database.ts";

interface Props {
    user: Account | null | undefined
}

function Sidebar(props: Props) {
    // const accounts = useLiveQuery(() => db.accounts.toArray());
    const {user} = props;
    const [currentDialog, setCurrentDialog] = useState<'none' | 'profile' | 'create-group' | 'create-channel' | 'contacts' | 'settings'>('none')

    const closeDialog = () => setCurrentDialog('none');

    return <div>
        {/*profile*/}
        <div className={"flex flex-col gap-1 m-2"}>
            {/*<img src={"https://avatars.githubusercontent.com/u/61075476?v=4"} className={"size-14 rounded-full"}*/}
            {/*     alt={"avatar"}/>*/}
            <Avatar username={user?.username ? user.username : 'unknown'} showName={user?.nickname ? user.nickname : 'unknown'} />
            <div className={"flex flex-row justify-between gap-2"}>
                {/*current username*/}
                <p className={"font-medium"}>{user?.nickname}</p>
            </div>
            <p className={"text-gray-500"}>@{user?.nickname}</p>
        </div>
        <Divider/>
        <SidebarItem icon={<FaRegCircleUser fontSize={15}/>} text={"My Profile"}
                     onClick={() => setCurrentDialog('profile')}/>
        <Divider/>
        <SidebarItem icon={<FaUserGroup fontSize={15}/>} text={"New Group"}
                     onClick={() => setCurrentDialog('create-group')}/>
        <SidebarItem icon={<FaBullhorn fontSize={15}/>} text={"New Channel"}
                     onClick={() => setCurrentDialog('create-channel')}/>
        <SidebarItem icon={<FaUser fontSize={15}/>} text={"Contacts"} onClick={() => setCurrentDialog('contacts')}/>
        <SidebarItem icon={<FaBookmark fontSize={15}/>} text={"Archived Messages"}/>
        <SidebarItem icon={<FaGear fontSize={15}/>} text={"Settings"} onClick={() => setCurrentDialog('settings')}/>

        <Dialog open={currentDialog === 'profile'} as={"div"} onClose={() => setCurrentDialog('none')}>
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto backdrop-blur">
                <div className="flex min-h-full items-center justify-center p-4">
                    <DialogPanel
                        transition
                        className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                    >

                    </DialogPanel>
                </div>
            </div>
        </Dialog>
        <Dialog open={currentDialog === 'create-group'} as={"div"} onClose={closeDialog}>
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto backdrop-blur">
                <div className="flex min-h-full items-center justify-center p-4">
                    <CreateGroupDialog user={user} onSuccess={closeDialog}/>
                </div>
            </div>
        </Dialog>
        <Dialog open={currentDialog === 'create-channel'} as={"div"} onClose={closeDialog}>
            <h1>Create A Channel</h1>
        </Dialog>
        <Dialog open={currentDialog === 'contacts'} as={"div"} onClose={closeDialog}>
            <h1>My contacts</h1>
        </Dialog>
        <Dialog open={currentDialog === 'settings'} as={"div"} onClose={closeDialog}>
            <h1>Settings</h1>
        </Dialog>
    </div>;
}

export default Sidebar;