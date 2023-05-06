import './fixed-overlay.scss';
export declare const FixedOverlay: import("vue").DefineComponent<{
    readonly modelValue: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly lockScroll: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly closeOnClickOverlay: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "click" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly lockScroll: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly closeOnClickOverlay: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
}>>, {
    readonly modelValue: boolean;
    readonly lockScroll: boolean;
    readonly closeOnClickOverlay: boolean;
}>;
