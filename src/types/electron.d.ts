declare global {
    interface Window {
        electron: {
            getConfig: <T>(key: string) => Promise<T>;
            setConfig: (key: string, value: unknown) => Promise<void>;
        };
    }
}

export {};