/**
 * - y: year yy 取后2位，其他情况取4位
 * - M: month 最多取2位补0
 * @param fmt
 * @param d
 */
export declare const formatDate: (fmt: string, d: Date) => string;
export declare const formatRange: (fmt: string, a: Date, b: Date, conn?: string) => string;
/**
 * 判断节点a是否在节点b中
 * @param a
 * @param b
 * @returns
 */
export declare const isIn: (a: Node | null, b: Node | null) => boolean;
export declare class EventManager {
    private readonly items;
    constructor();
    append(el: Node | Window, name: string, cb: EventListenerOrEventListenerObject, capture?: boolean): void;
    dispose(): void;
}
export declare const traceNode: (el: Node) => Node[];
/**
 * 函数安全调用
 */
export declare const invokeFunction: <T>(fn?: ((...args: T[]) => void) | undefined, ...args: T[]) => void;
export declare const getMinDate: (a?: Date | undefined, b?: Date | undefined) => Date | undefined;
