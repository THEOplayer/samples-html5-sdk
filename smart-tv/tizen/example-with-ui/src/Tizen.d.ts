declare interface Window {
    tizen?: {
        tvinputdevice: {
            registerKey(key: string): void;
        };
    };
}
