import './color-picker.scss';
declare const _default: import("vue").DefineComponent<{
    readonly modelValue: {
        readonly type: import("vue").PropType<string | number>;
        readonly default: {};
    };
    readonly mode: {
        readonly type: StringConstructor;
    };
    readonly showAlpha: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly dotSize: {
        readonly type: NumberConstructor;
        readonly default: 15;
    };
    readonly swatches: {
        readonly type: import("vue").PropType<string[]>;
    };
    readonly showHistory: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: {
        readonly type: import("vue").PropType<string | number>;
        readonly default: {};
    };
    readonly mode: {
        readonly type: StringConstructor;
    };
    readonly showAlpha: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly dotSize: {
        readonly type: NumberConstructor;
        readonly default: 15;
    };
    readonly swatches: {
        readonly type: import("vue").PropType<string[]>;
    };
    readonly showHistory: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    readonly modelValue: string | number;
    readonly showAlpha: boolean;
    readonly dotSize: number;
    readonly showHistory: boolean;
}>;
export default _default;
