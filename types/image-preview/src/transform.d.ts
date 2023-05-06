interface Options {
    transformX?: number;
    transformY?: number;
    zoom?: number;
    rotate?: number;
}
interface HTMLElementPlus extends HTMLElement {
    onmousewheel?: (...args: unknown[]) => void;
}
export default class Transform {
    private el;
    private oTransformX;
    private oTransformY;
    private transformX;
    private transformY;
    private zoom;
    private rotate;
    private STEP;
    private MIN_SCALE;
    private MAX_SCALE;
    private TRANSFORMX;
    private TRANSFORMY;
    private ZOOM;
    private ROTATE;
    constructor(el: HTMLElementPlus, options?: Options);
    handleDefaultDraggable(): void;
    onDraggable(): void;
    onMouseWheel(): void;
    throttle(fn: (...args: unknown[]) => void, t: number): void;
    setMouseWheel(value: number): void;
    setZoomIn(step?: number): void;
    setZoomOut(step?: number): void;
    setZoomBest(): void;
    setZoomOriginal(): void;
    setRotate(): void;
    reset(): void;
    setPosition(): void;
}
export {};
