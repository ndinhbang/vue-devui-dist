export declare class Store {
    private rootMenuName;
    constructor(rootName: string);
    on(eventName: string, fn: (...args: any[]) => void): void;
    emit(eventName: string, ...args: any[]): void;
    off(eventName: string, fn: (...args: []) => void): void;
}
export declare function useStore(rootName: string): Store;
