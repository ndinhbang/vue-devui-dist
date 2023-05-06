import './drawer.scss';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    zIndex: {
        type: NumberConstructor;
        default: number;
    };
    showOverlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    escKeyCloseable: {
        type: BooleanConstructor;
        default: boolean;
    };
    position: {
        type: import("vue").PropType<"left" | "right">;
        default: string;
    };
    lockScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    beforeClose: {
        type: import("vue").PropType<(done: () => void) => void>;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("open" | "close" | "update:modelValue")[], "open" | "close" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    zIndex: {
        type: NumberConstructor;
        default: number;
    };
    showOverlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    escKeyCloseable: {
        type: BooleanConstructor;
        default: boolean;
    };
    position: {
        type: import("vue").PropType<"left" | "right">;
        default: string;
    };
    lockScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    beforeClose: {
        type: import("vue").PropType<(done: () => void) => void>;
    };
}>> & {
    onClose?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onOpen?: ((...args: any[]) => any) | undefined;
}, {
    position: "left" | "right";
    zIndex: number;
    modelValue: boolean;
    lockScroll: boolean;
    closeOnClickOverlay: boolean;
    showOverlay: boolean;
    escKeyCloseable: boolean;
}>;
export default _default;
