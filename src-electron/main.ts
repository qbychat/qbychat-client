import {app, BrowserWindow, ipcMain} from 'electron'
import {getPreloadPath, getUIPath} from "./pathResolver.js";
import {isDev} from "./utils.js";
import Store from "electron-store";

function createWindow() {
    const win = new BrowserWindow({
        webPreferences: {
            preload: getPreloadPath(),
            devTools: isDev() // only enable devtools for dev environment
        },
        autoHideMenuBar: true,
        width: 1200,
        height: 650,
    });

    if (isDev()) {
        win.loadURL("http://localhost:5123");
    } else {
        win.loadFile(getUIPath());
    }
}

app.whenReady().then(() => {
    createWindow();

    const store = new Store();

    ipcMain.handle('get-config', (event, key: string) => {
        return store.get(key);
    });

    ipcMain.handle('set-config', (event, key: string, value: unknown) => {
        store.set(key, value);
    });

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('window-all-closed', () => {
    app.quit();
});
