import './App.css'
import {HashRouter, Navigate, Route, Routes} from "react-router-dom";
import GuideWelcomePage from "./compoents/Guide/GuideWelcomePage.tsx";
import ConnectionIndicator from "./compoents/ConnectionIndicator/ConnectionIndicator.tsx";
import GuideConfigServerPage from "./compoents/Guide/GuideConfigServerPage.tsx";
import {connectionManager, useConnectionStatus} from "./qclib/conn-manager.ts";
import GuideConfigAccountPage from "./compoents/Guide/GuideConfigAccountPage.tsx";
import {useEffect} from "react";
import {configManager, KEY_CONNECTION_CONFIG_URL} from "./qclib/config-manager.ts";

function App() {
    const connectionStatus = useConnectionStatus()
    const isLoggedIn = false; // todo mock value

    useEffect(() => {
        // check config value
        configManager.get<string>(KEY_CONNECTION_CONFIG_URL).then(configUrl => {
            if (configUrl) {
                console.log(`Auto receiving config from ${configUrl}`);
                // connect to websocket
                connectionManager.receiveConfigAndConnect(configUrl).then(() => {
                    console.log("Connected.");
                });
            }
        });
    }, []);

    return (<>
        {connectionStatus != "connected" && <ConnectionIndicator status={connectionStatus}/>}
        <HashRouter>
            <Routes>
                <Route
                    path="/"
                    element={isLoggedIn ? <Navigate to={"/chat"}/> : <Navigate to={"/guide"}/>}
                />
                <Route path={"/guide"} element={<GuideWelcomePage/>}/>
                <Route path={"/guide/server"} element={<GuideConfigServerPage/>}/>
                <Route path={"/guide/account"} element={<GuideConfigAccountPage/>}/>
            </Routes>
        </HashRouter>
    </>);
}

export default App
