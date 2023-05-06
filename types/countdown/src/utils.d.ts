export declare const getFormatTime: (leftTime: number) => Map<string, number>;
export declare const getLegalTime: (s: Set<string>, timeformat: Map<string, number>) => Map<string, number>;
interface ITimeSplit {
    k: string;
    n: number;
}
export declare const getTimeSplit: (format: string) => ITimeSplit[];
export declare const getDeduplication: (format: string) => Set<string>;
export declare const numFormat: (n: number, len: number) => number | string;
export declare const intervalTimer: (callback: () => void, interval?: number) => () => void;
export {};
