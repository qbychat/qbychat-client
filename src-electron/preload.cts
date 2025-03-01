import {contextBridge, ipcRenderer} from "electron";

ipcRenderer.invoke('get-version').then(version => {
    console.log(`Welcome to QbyChat Desktop v${version}!`)
});

contextBridge.exposeInMainWorld('electron', {
    getClientName: () => ipcRenderer.invoke('get-name'),
    getVersion: () => ipcRenderer.invoke('get-version'),

    getConfig: (key: string) => ipcRenderer.invoke('get-config', key),
    setConfig: (key: string, value: unknown) => ipcRenderer.invoke('set-config', key, value),

    saveAccountToken: (serviceName: string, account: string, token: string) => ipcRenderer.invoke("save-token", serviceName, account, token),
    getAccountToken: (serviceName: string, account: string) => ipcRenderer.invoke('get-token', serviceName, account),
    deleteAccount: (serviceName: string, account: string) => ipcRenderer.invoke('delete-account', serviceName, account),
    findCredentials: (serviceName: string) => ipcRenderer.invoke('find-credentials', serviceName),
});
