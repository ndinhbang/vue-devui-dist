import './flexible-overlay.scss';
export declare const FlexibleOverlay: import("vue").DefineComponent<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    origin: {
        type: import("vue").PropType<HTMLElement>;
        require: boolean;
    };
    position: {
        type: import("vue").PropType<import("./flexible-overlay-types").Placement[]>;
        default: string[];
    };
    offset: {
        type: import("vue").PropType<number | import("./flexible-overlay-types").OffsetOptions>;
        default: number;
    };
    shiftOffset: {
        type: NumberConstructor;
    };
    align: {
        type: import("vue").PropType<import("./flexible-overlay-types").Alignment> | null;
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
}, () => false | JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "positionChange")[], "update:modelValue" | "positionChange", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    origin: {
        type: import("vue").PropType<HTMLElement>;
        require: boolean;
    };
    position: {
        type: import("vue").PropType<import("./flexible-overlay-types").Placement[]>;
        default: string[];
    };
    offset: {
        type: import("vue").PropType<number | import("./flexible-overlay-types").OffsetOptions>;
        default: number;
    };
    shiftOffset: {
        type: NumberConstructor;
    };
    align: {
        type: import("vue").PropType<import("./flexible-overlay-types").Alignment> | null;
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
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onPositionChange?: ((...args: any[]) => any) | undefined;
}, {
    offset: number | import("./flexible-overlay-types").OffsetOptions;
    position: import("./flexible-overlay-types").Placement[];
    align: import("./flexible-overlay-types").Alignment;
    modelValue: boolean;
    showArrow: boolean;
    isArrowCenter: boolean;
    clickEventBubble: boolean;
}>;
