export declare function createMouseEvent(type: string, x?: number, y?: number): MouseEvent;
export declare function dispatchMouseEvent(node: Node, type: string, x?: number, y?: number, event?: MouseEvent): void;
export declare function mouseMoveTrigger(el: HTMLElement, from: {
    x: number;
    y: number;
}, to: {
    x: number;
    y: number;
}): void;
