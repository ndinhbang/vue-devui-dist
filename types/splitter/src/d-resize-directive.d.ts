import type { Directive } from 'vue';
export interface CoordinateInfo {
    pageX: number;
    pageY: number;
    clientX: number;
    clientY: number;
    offsetX: number;
    offsetY: number;
    type: string;
    originalEvent: MouseEvent;
}
export declare type OnResizeEvent = (coordinateInfo: CoordinateInfo) => void;
export interface ResizeDirectiveProp {
    enableResize: true;
    onPressEvent: OnResizeEvent;
    onDragEvent: OnResizeEvent;
    onReleaseEvent: OnResizeEvent;
}
export interface CustomElement extends HTMLElement {
    resizeProps: {
        enableResize: boolean;
        onPressEvent: (arg: CoordinateInfo) => void;
        onDragEvent: (arg: CoordinateInfo) => void;
        onReleaseEvent: (arg: CoordinateInfo) => void;
    };
}
declare const resize: Directive;
export default resize;
