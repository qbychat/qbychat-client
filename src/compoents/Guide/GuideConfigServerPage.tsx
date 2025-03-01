import {useEffect, useRef, useState} from "react";
import {connectionManager} from "../../qclib/conn-manager.ts";
import {KEY_CONNECTION_CONFIG_URL, useConfig} from "../../qclib/config-manager.ts";
import {useNavigate} from "react-router-dom";
import {setTitle} from "../../utils/web-utils.ts";

interface BackendConfigInputProps {
    value: string;
    onValueChange: (value: string) => void;
}

function BackendConfigInput(props: BackendConfigInputProps) {
    return (<fieldset className="fieldset">
        <legend className="fieldset-legend">Connection Config URL</legend>
        <label className="input validator">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none"
                   stroke="currentColor">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </g>
            </svg>
            <input
                type="url"
                required
                value={props.value}
                onChange={(e) => props.onValueChange(e.target.value)}
                placeholder="https://chat.lunarclient.top"
                pattern="^(http|https):\/\/.*"
                title={"Must be valid URL (http:// or https://)"}
            />
        </label>
        <p className="validator-hint">Must be valid URL (http:// or https://)</p>
    </fieldset>);
}

function GuideConfigServerPage() {
    const navigate = useNavigate();

    const connectButton = useRef<HTMLButtonElement | null>(null);
    const [connectionUrl, setConnectionUrl] = useConfig(KEY_CONNECTION_CONFIG_URL, "");
    const [connectionUrlValid, setConnectionUrlValid] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleInputUrl = (value: string) => {
        setConnectionUrl(value);
    }

    const handleConnect = () => {
        setLoading(true);
        setError(null);
        connectionManager.receiveConfigAndConnect(connectionUrl).then(() => {
            console.log("Connected!");
            setLoading(false);
            // navigate to next stage
            navigate("/guide/account");
        }).catch((err) => {
            setLoading(false);
            setError(err.message)
        });
    }

    useEffect(() => {
        setConnectionUrlValid(/^(http|https):\/\/.*/.test(connectionUrl))
    }, [connectionUrl]);

    useEffect(() => {
        setTitle("Connect to a Server");
    }, []);

    return <>
        <div className={"flex flex-col gap-3 items-center justify-center min-h-screen select-none"}>
            <div className={"text-3xl"}>Connect to a QbyChat server</div>
            <p>Unlike other commercial chat software, QbyChat requires a self-built backend service to run.</p>
            {error && <p className={"text-red-500"}>Error: {error}</p>}
            <BackendConfigInput value={connectionUrl} onValueChange={handleInputUrl}/>
            <button ref={connectButton} onClick={handleConnect} className="btn btn-soft btn-primary"
                    disabled={!connectionUrlValid}>
                {loading && <span className="p-1 loading loading-spinner w-6 text-primary-content"></span>}
                Connect & Next step
            </button>
        </div>
    </>;
}

export default GuideConfigServerPage;