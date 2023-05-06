import type { ExtractPropTypes, PropType, Ref } from 'vue';
export declare type Placement = 'top' | 'right' | 'bottom' | 'left' | 'top-start' | 'top-end' | 'right-start' | 'right-end' | 'bottom-start' | 'bottom-end' | 'left-start' | 'left-end';
export declare type Alignment = 'start' | 'end';
export declare type OffsetOptions = {
    mainAxis?: number;
    crossAxis?: number;
};
export declare type Point = {
    x?: number;
    y?: number;
};
export declare type UseOverlayFn = {
    arrowRef: Ref<HTMLElement | undefined>;
    overlayRef: Ref<HTMLElement | undefined>;
    updatePosition: () => void;
};
export declare type EmitEventFn = (event: 'positionChange' | 'update:modelValue', result?: unknown) => void;
export interface Rect {
    x: number;
    y: number;
    width?: number;
    height?: number;
}
export declare const flexibleOverlayProps: {
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    origin: {
        type: PropType<HTMLElement>;
        require: boolean;
    };
    position: {
        type: PropType<Placement[]>;
        default: string[];
    };
    offset: {
        type: PropType<number | OffsetOptions>;
        default: number;
    };
    shiftOffset: {
        type: NumberConstructor;
    };
    align: {
        type: PropType<Alignment> | null;
        default: null;
    };
    showArrow: {
        type: BooleanConstructor;
        default: boolean;
    };
    isArrowCenter: {
        type: BooleanConstructor;
        default: boolean;
    };
    clickEventBubble: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare type FlexibleOverlayProps = ExtractPropTypes<typeof flexibleOverlayProps>;
