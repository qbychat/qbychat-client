import * as React from "react";
import {useEffect, useState} from "react";
import BackButton from "../BackButton/BackButton.tsx";
import {Link, useNavigate} from "react-router-dom";
import {userService} from "../../qclib/service/user-service.ts";
import {qbychat} from "../../proto/proto";
import RegisterStatus = qbychat.websocket.user.RegisterStatus;
import TokenUpdateEvent = qbychat.websocket.auth.TokenUpdateEvent;
import {eventManger} from "../../qclib/event-manager.ts";

function RegisterPage() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState<string | null>()
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        const id = eventManger.registerEventHandler(TokenUpdateEvent.getTypeUrl(), async () => {
            // do navigate
            navigate("/");
        })
        return () => {
            eventManger.removeEventHandler(id)
        }
    }, []);

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        if (password !== confirmPassword) {
            return;
        }
        console.log(`Registering user ${username}`);
        const response = await userService.register(username, password);
        switch (response.status) {
            case qbychat.websocket.user.RegisterStatus.SUCCESS:
                setSuccess(true);
                break;
            case RegisterStatus.BAD_USERNAME:
                setError("Bad username");
                break;
            case RegisterStatus.USERNAME_EXISTS:
                setError("User already exists");
                break;
        }
    }

    return (<>
        {!success && <BackButton/>}
        <div className={"flex flex-col gap-3 items-center justify-center min-h-screen select-none"}>
            <div className={"text-3xl"}>Register a QbyChat account</div>
            {success && <p className={"text-green-500"}>Registered success. Waiting for the token update event...</p>}
            {error && <p className={"text-red-500"}>{error}</p>}
            <form className={"flex flex-col gap-3 items-center"} onSubmit={handleRegister} hidden={success}>
                <label className="floating-label">
                    <span>Username</span>
                    <input type="text" placeholder="Username" className="input input-md" required={true}
                           value={username}
                           onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <label className="floating-label">
                    <span>Password</span>
                    <input type="password" placeholder="Password" className="input input-md" required={true}
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <label className="floating-label">
                    <span>Confirm Password</span>
                    <input type="password" placeholder="Confirm Password" className="input input-md" required={true}
                           value={confirmPassword}
                           onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {password !== confirmPassword &&
                        <p className={"text-red-500 validator-hint"}>Password do not match</p>}
                </label>
                <div className={"flex flex-row gap-3"}>
                    <Link to={"/user/login"} replace={true} className="btn btn-soft">Go Login</Link>
                    <button className="btn btn-soft btn-primary" type={"submit"}>Register</button>
                </div>
            </form>
        </div>
    </>);
}

export default RegisterPage;