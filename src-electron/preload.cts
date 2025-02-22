import {contextBridge, ipcRenderer} from "electron";

console.log("Welcome to qbychat!")


contextBridge.exposeInMainWorld('electron', {
    getConfig: (key: string) => ipcRenderer.invoke('get-config', key),
    setConfig: (key: string, value: unknown) => ipcRenderer.invoke('set-config', key, value),
});
