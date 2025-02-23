declare global {
    interface Window {
        electron: {
            getVersion: () => Promise<string>;
            getConfig: <T>(key: string) => Promise<T>;
            setConfig: (key: string, value: unknown) => Promise<void>;
        };
    }
}

export {};