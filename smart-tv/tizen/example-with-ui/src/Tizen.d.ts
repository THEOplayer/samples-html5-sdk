declare interface Window {
    tizen?: typeof tizen;
}

declare namespace tizen {
    interface tvinputdevice {
        registerKey(key: string): void;
    }
}
