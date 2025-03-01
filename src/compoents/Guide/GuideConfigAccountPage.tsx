import {KEY_CONNECTION_CONFIG_URL, useConfig} from "../../qclib/config-manager.ts";
import {Link} from "react-router-dom";
import {useEffect} from "react";
import {setTitle} from "../../utils/web-utils.ts";

function GuideConfigAccountPage() {
    const [connectionUrl] = useConfig(KEY_CONNECTION_CONFIG_URL, "");

    useEffect(() => {
        setTitle("Log in to QbyChat");
    }, []);

    return <>
        <div className={"flex flex-col gap-3 items-center justify-center min-h-screen select-none"}>
            <div className={"text-3xl"}>Login to QbyChat</div>
            <p>Great, you have successfully connected to the QbyChat server <strong
                className={"select-all underline"}>{connectionUrl}</strong>, next you need to log in to your account</p>
            <p>You can register or log in with an existing account, select an option below to continue</p>
            <div className="flex flex-col gap-2 items-center justify-center">
                <div className="flex w-full flex-row gap-2 justify-between">
                    <Link to={"/user/register"} className="btn flex-grow btn-soft btn-primary">Register</Link>
                    <Link to={"/user/login"} className="btn flex-grow btn-soft btn-secondary">Login</Link>
                </div>
                <Link to={"/guide/server"} className="btn btn-soft">Back to server configuration</Link>
            </div>
        </div>
    </>;
}

export default GuideConfigAccountPage;