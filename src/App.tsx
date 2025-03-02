import './App.css'
import {HashRouter, Route, Routes} from "react-router-dom";
import GuideWelcomePage from "./compoents/Guide/GuideWelcomePage.tsx";
import ConnectionIndicator from "./compoents/ConnectionIndicator/ConnectionIndicator.tsx";
import GuideConfigServerPage from "./compoents/Guide/GuideConfigServerPage.tsx";
import {connectionManager, useConnectionStatus} from "./qclib/conn-manager.ts";
import GuideConfigAccountPage from "./compoents/Guide/GuideConfigAccountPage.tsx";
import {useEffect, useState} from "react";
import {configManager, KEY_CONNECTION_CONFIG_URL} from "./qclib/config-manager.ts";
import RegisterPage from "./compoents/RegisterPage/RegisterPage.tsx";
import LoginPage from "./compoents/LoginPage/LoginPage.tsx";
import LoadingPage from "./compoents/LoadingPage/LoadingPage.tsx";
import ChatPage from "./compoents/ChatPage/ChatPage.tsx";

function App() {
    const connectionStatus = useConnectionStatus();
    const [showConnectionIndicator, setShowConnectionIndicator] = useState(true);

    useEffect(() => {
        // auto connect
        // check config value
        configManager.get<string>(KEY_CONNECTION_CONFIG_URL).then(configUrl => {
            if (configUrl) {
                console.log(`Auto receiving config from ${configUrl}`);
                // connect to websocket
                connectionManager.receiveConfigAndConnect(configUrl).then(() => {
                    console.log("Connected.");
                    setShowConnectionIndicator(false);
                });
            }
        });

        return () => {
            connectionManager.disconnect();
        }
    }, []);

    useEffect(() => {
        setShowConnectionIndicator(connectionStatus !== 'connected' && connectionStatus !== 'unset');
    }, [connectionStatus]);

    return (<div className={"h-screen w-full"}>
        {showConnectionIndicator && (
            <ConnectionIndicator status={connectionStatus}/>
        )}
        <HashRouter>
            <Routes>
                <Route index={true}
                       element={<LoadingPage/>}
                />
                <Route path={"/chat"} element={<ChatPage/>}/>
                <Route path={"/user/login"} element={<LoginPage/>}/>
                <Route path={"/user/register"} element={<RegisterPage/>}/>

                <Route path={"/guide"} element={<GuideWelcomePage/>}/>
                <Route path={"/guide/server"} element={<GuideConfigServerPage/>}/>
                <Route path={"/guide/account"} element={<GuideConfigAccountPage/>}/>
            </Routes>
        </HashRouter>
    </div>);
}

export default App
