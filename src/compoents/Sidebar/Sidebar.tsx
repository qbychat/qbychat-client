import {useState} from "react";
import SidebarItem from "./SidebarItem.tsx";
import {FaUser} from "react-icons/fa";
import Divider from "../Divider/Divider.tsx";
import {FaBookmark, FaBullhorn, FaGear, FaRegCircleUser, FaUserGroup} from "react-icons/fa6";
import Dialog from "../Dialog/Dialog.tsx";
import {useLiveQuery} from "dexie-react-hooks";
import {db} from "../../qclib/database.ts";
import {accountManager} from "../../qclib/account-manager.ts";

function Sidebar() {
    // const accounts = useLiveQuery(() => db.accounts.toArray());
    const user = useLiveQuery(async () => db.accounts.where('remoteId').equals((await accountManager.getActiveAccount())!).first());
    const [currentDialog, setCurrentDialog] = useState<'none' | 'profile' | 'create-group' | 'create-channel' | 'contacts' | 'settings'>('none')

    return <div>
        {/*profile*/}
        <div className={"flex flex-col gap-1 m-2"}>
            {/*<img src={"https://avatars.githubusercontent.com/u/61075476?v=4"} className={"size-14 rounded-full"}*/}
            {/*     alt={"avatar"}/>*/}
            <div className={"flex flex-row justify-between gap-2"}>
                {/*current username*/}
                <p className={"font-medium"}>{user?.nickname}</p>
            </div>
                <p className={"text-gray-500"}>@{user?.nickname}</p>
        </div>
        <Divider/>
        <SidebarItem icon={<FaRegCircleUser fontSize={15}/>} text={"My Profile"} onClick={() => setCurrentDialog('profile')}/>
        <Divider/>
        <SidebarItem icon={<FaUserGroup fontSize={15}/>} text={"New Group"}
                     onClick={() => setCurrentDialog('create-group')}/>
        <SidebarItem icon={<FaBullhorn fontSize={15}/>} text={"New Channel"} onClick={() => setCurrentDialog('create-channel')}/>
        <SidebarItem icon={<FaUser fontSize={15}/>} text={"Contacts"} onClick={() => setCurrentDialog('contacts')}/>
        <SidebarItem icon={<FaBookmark fontSize={15}/>} text={"Archived Messages"}/>
        <SidebarItem icon={<FaGear fontSize={15}/>} text={"Settings"} onClick={() => setCurrentDialog('settings')}/>

        <Dialog state={currentDialog === 'profile'} onCancel={() => setCurrentDialog('none')}>
            <h1>Profile</h1>
        </Dialog>
        <Dialog state={currentDialog === 'create-group'} onCancel={() => setCurrentDialog('none')}>
            <h1>Create A group</h1>
        </Dialog>
        <Dialog state={currentDialog === 'create-channel'} onCancel={() => setCurrentDialog('none')}>
            <h1>Create A Channel</h1>
        </Dialog>
        <Dialog state={currentDialog === 'contacts'} onCancel={() => setCurrentDialog('none')}>
            <h1>My contacts</h1>
        </Dialog>
        <Dialog state={currentDialog === 'settings'} onCancel={() => setCurrentDialog('none')}>
            <h1>Settings</h1>
        </Dialog>
    </div>;
}

export default Sidebar;