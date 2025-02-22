import {MdWarning} from "react-icons/md";

interface Props {
    status: string
}

function ConnectionIndicator(props: Props) {
    return (<>
        <div
            className="fixed flex flex-row left-0 bottom-0 rounded-full group m-2 p-1 bg-primary w-8 hover:w-70 overflow-hidden transition-all duration-200 ease-linear cursor-pointer">
            {props.status != "unset" ? <><span className="p-1 loading loading-spinner w-6 text-primary-content"></span>
                <div
                    className="absolute group-hover:relativea left-10 text-primary-content opacity-0 group-hover:opacity-100 pr-1 group-hover:scale-100 transition-all transform duration-200">
                    Connecting... ({props.status})
                </div>
            </> : <>
                <span className="p-1 w-6 text-yellow-500"><MdWarning size={15}/></span>
                <div
                    className="absolute group-hover:relativea left-10 text-primary-content opacity-0 group-hover:opacity-100 pr-1 group-hover:scale-100 transition-all transform duration-200">
                    Not configured yet
                </div>
            </>
            }
        </div>
    </>);
}

export default ConnectionIndicator;