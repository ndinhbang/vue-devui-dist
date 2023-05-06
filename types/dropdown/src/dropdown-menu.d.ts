declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    origin: {
        type: import("vue").PropType<HTMLElement>;
        require: boolean;
    };
    position: {
        type: import("vue").PropType<import("./dropdown-menu-types").Placement[]>;
        default: string[];
    };
    align: {
        type: import("vue").PropType<import("./dropdown-menu-types").Alignment> | null;
        default: null;
    };
    offset: {
        type: import("vue").PropType<number | import("./dropdown-menu-types").OffsetOptions>;
        default: number;
    };
    clickOutside: {
        type: import("vue").PropType<() => boolean>;
        default: () => boolean;
    };
    showAnimation: {
        type: BooleanConstructor;
        default: boolean;
    };
    overlayClass: {
        type: StringConstructor;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    origin: {
        type: import("vue").PropType<HTMLElement>;
        require: boolean;
    };
    position: {
        type: import("vue").PropType<import("./dropdown-menu-types").Placement[]>;
        default: string[];
    };
    align: {
        type: import("vue").PropType<import("./dropdown-menu-types").Alignment> | null;
        default: null;
    };
    offset: {
        type: import("vue").PropType<number | import("./dropdown-menu-types").OffsetOptions>;
        default: number;
    };
    clickOutside: {
        type: import("vue").PropType<() => boolean>;
        default: () => boolean;
    };
    showAnimation: {
        type: BooleanConstructor;
        default: boolean;
    };
    overlayClass: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    offset: number | import("./dropdown-menu-types").OffsetOptions;
    position: import("./dropdown-menu-types").Placement[];
    align: import("./dropdown-menu-types").Alignment;
    modelValue: boolean;
    showAnimation: boolean;
    overlayClass: string;
    clickOutside: () => boolean;
}>;
export default _default;
