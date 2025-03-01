declare global {
    interface Window {
        electron: {
            getClientName: () => Promise<string>;
            getVersion: () => Promise<string>;
            getConfig: <T>(key: string) => Promise<T>;
            setConfig: (key: string, value: unknown) => Promise<void>;
            saveAccountToken: (serviceName: string, account: string, token: string) => Promise<void>,
            findCredentials: (serviceName: string) => Promise<{ account: string, password: string }[]>,
            getAccountToken: (serviceName: string, account: string) => Promise<string>,
            deleteAccount: (serviceName: string, account: string) => Promise<void>,
        };
    }
}

export {};