import {Button, DialogPanel, DialogTitle, Input} from "@headlessui/react";
import {chatService} from "../../qclib/service/chat-service.ts";
import {FormEvent, useState} from "react";
import {Account} from "../../qclib/database.ts";

interface Props {
    user: Account | null | undefined;
    onSuccess: () => void;
}

function CreateGroupDialog(props: Props) {
    const [groupTitle, setGroupTitle] = useState("")

    const handleCreateGroup = async (e: FormEvent) => {
        e.preventDefault();
        await chatService.createGroup(props.user!.remoteId, groupTitle);
        // callback
        props.onSuccess();
    }

    return <DialogPanel
        transition
        className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
    >
        <DialogTitle as="h3" className="text-base/7 font-medium text-white">
            Create A Group
        </DialogTitle>
        <form className={"w-full flex flex-col gap-2"} onSubmit={handleCreateGroup}>
            <label className="floating-label w-full">
                <span>Group Name</span>
                <Input type="text" placeholder="Group Name" className="input input-md w-full" value={groupTitle}
                       onChange={(e) => setGroupTitle(e.target.value)}
                       required={true}/>
            </label>
            <Button className={"btn btn-primary w-full"} type={"submit"}>Continue</Button>
        </form>
    </DialogPanel>
}

export default CreateGroupDialog;