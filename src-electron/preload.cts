import {contextBridge, ipcRenderer} from "electron";

ipcRenderer.invoke('get-version').then(version => {
    console.log(`Welcome to QbyChat Desktop v${version}!`)
});

contextBridge.exposeInMainWorld('electron', {
    getVersion: () => ipcRenderer.invoke('get-version'),

    getConfig: (key: string) => ipcRenderer.invoke('get-config', key),
    setConfig: (key: string, value: unknown) => ipcRenderer.invoke('set-config', key, value),
});
