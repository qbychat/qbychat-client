import * as React from "react";
import {useEffect, useState} from "react";
import BackButton from "../BackButton/BackButton.tsx";
import {Link, useNavigate} from "react-router-dom";
import {FaQrcode} from "react-icons/fa";
import {MdLogin} from "react-icons/md";
import {userService} from "../../qclib/service/user-service.ts";
import {qbychat} from "../../proto/proto";
import {connectionManager} from "../../qclib/conn-manager.ts";
import LoginStatus = qbychat.websocket.auth.LoginStatus;
import TokenUpdateEvent = qbychat.websocket.auth.TokenUpdateEvent;

function LoginPage() {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        const response = await userService.basicLogin(username, password);
        switch (response.status) {
            case LoginStatus.SUCCESS:
                setSuccess(true)
                break;
            case LoginStatus.USER_NOT_FOUND:
                setError("User Not Found");
                break;
            case qbychat.websocket.auth.LoginStatus.BAD_PASSWORD:
                setError("Wrong password");
                break;
        }
    }

    useEffect(() => {
        const id = connectionManager.registerEventHandler(TokenUpdateEvent.getTypeUrl(), async () => {
            // do navigate
            navigate("/");
        })
        return () => {
            connectionManager.removeEventHandler(id)
        }
    }, []);

    return (<>
        {!success && <BackButton/>}
        <div className={"flex flex-col gap-3 items-center justify-center min-h-screen select-none"}>
            <div className={"text-3xl"}>Login to QbyChat</div>
            {success &&
                <p className={"text-green-500"}>Authorized success, waiting for the token update event to continue</p>}
            {error && <p className={"text-red-500"}>{error}</p>}
            <form className={"flex flex-col gap-3"} onSubmit={handleLogin} hidden={success}>
                <label className="floating-label">
                    <span>Username</span>
                    <input type="text" placeholder="Username" className="input input-md"
                           value={username}
                           onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <label className="floating-label">
                    <span>Password</span>
                    <input type="password" placeholder="Password" className="input input-md"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                    />
                </label>

                <div className="flex flex-col gap-2 items-center justify-center">
                    <div className="flex w-full flex-row gap-2 justify-between">
                        <Link to={"/user/register"} replace={true} className="flex-grow btn btn-soft">
                            Go Register
                        </Link>
                        <button className={"flex-grow btn btn-soft btn-primary"} type={"submit"}>
                            <MdLogin/>
                            Login
                        </button>
                    </div>
                    <Link to={"/user/login/qr"} replace={true} className="w-full flex-grow btn btn-soft btn-secondary">
                        <FaQrcode/>
                        Login With QrCode
                    </Link>
                </div>
            </form>
        </div>
    </>);
}

export default LoginPage;