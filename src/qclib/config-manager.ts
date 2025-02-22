import {useEffect, useState} from "react";

class ConfigManager {

    get<T>(key: string): Promise<T> {
        return window.electron.getConfig(key)
    }


    set(key: string, value?: unknown) {
        return window.electron.setConfig(key, value)
    }

}

const configManager = new ConfigManager();

export function useConfig<T>(key: string, defaultValue: T): readonly [T, (value: T) => void] {
    const [configValue, setConfigValue] = useState<T>(defaultValue);

    useEffect(() => {
        configManager.get<T>(key).then(storedValue => {
            if (storedValue !== undefined) {
                setConfigValue(storedValue);
            }
        });
    }, [key]);

    const setConfig = (value: T) => {
        configManager.set(key, value);
        setConfigValue(value);
    };

    return [configValue, setConfig] as const;
}

export const KEY_CONNECTION_CONFIG_URL = "qc-conn-cfg-url";

export {configManager};