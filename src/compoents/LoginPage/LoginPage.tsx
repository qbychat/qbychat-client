import {useState} from "react";
import BackButton from "../BackButton/BackButton.tsx";
import {Link} from "react-router-dom";
import {FaQrcode} from "react-icons/fa";
import {MdLogin} from "react-icons/md";

function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (<>
        <BackButton/>
        <div className={"flex flex-col gap-3 items-center justify-center min-h-screen select-none"}>
            <div className={"text-3xl"}>Login to QbyChat</div>
            <p></p>
            <div className={"flex flex-col gap-3"}>
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
            </div>
            <div className="flex flex-col gap-2 items-center justify-center">
                <div className="flex w-full flex-row gap-2 justify-between">
                    <Link to={"/user/register"} replace={true} className="flex-grow btn btn-soft">
                        Go Register
                    </Link>
                    <button className={"flex-grow btn btn-soft btn-primary"}>
                        <MdLogin/>
                        Login
                    </button>
                </div>
                <Link to={"/user/login/qr"} replace={true} className="w-full flex-grow btn btn-soft btn-secondary">
                    <FaQrcode/>
                    Login With QrCode
                </Link>
            </div>
        </div>
    </>);
}

export default LoginPage;