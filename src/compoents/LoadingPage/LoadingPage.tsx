import {useEffect} from "react";
import {eventManger} from "../../qclib/event-manager.ts";
import {useNavigate} from "react-router-dom";
import {accountManager} from "../../qclib/account-manager.ts";

function LoadingPage() {
    const navigate = useNavigate();

    useEffect(() => {
        const id = eventManger.registerEventHandler("authorized", () => {
            navigate("/chat", { replace: true }); // navigate to chat
        });

        return () => {
            eventManger.removeEventHandler(id)
        }
    });

    useEffect(() => {
        accountManager.listAccounts().then(accounts => {
            if (accounts.length === 0) {
                navigate("/guide", { replace: true }); // navigate to first-run guide
            }
        })
    });

    return (<></>); // just return an empty page
}

export default LoadingPage;