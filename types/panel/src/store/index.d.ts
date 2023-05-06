export declare const option: Record<string, unknown>;
declare class Store {
    static getByKey(timeStamp: string): unknown;
    static state(): Record<string, unknown>;
    static setData(key: string, value: unknown): void;
}
export default Store;
