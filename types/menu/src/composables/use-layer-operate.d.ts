interface clickEvent extends MouseEvent {
    path?: HTMLElement[] | Element[];
}
export declare function setDefaultIndent(indent: number): void;
export declare function pushElement(element: JSX.Element): void;
export declare function addLayer(): void;
export declare function clearSelect(ele: HTMLElement, event: clickEvent, isHorizontal?: boolean): void;
export declare function getLayer(el: HTMLElement): string | undefined;
export {};
