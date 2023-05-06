import './color-alpha-slider.scss';
declare const _default: import("vue").DefineComponent<{
    readonly color: {
        readonly type: ObjectConstructor;
    };
    readonly modelValue: {
        readonly type: import("vue").PropType<import("../../utils/color-utils-types").ColorPickerColor>;
        readonly default: {};
    };
    readonly rgba: {
        readonly type: ObjectConstructor;
        readonly default: null;
    };
    readonly height: {
        readonly type: NumberConstructor;
        readonly default: 15;
    };
    readonly width: {
        readonly type: NumberConstructor;
        readonly default: 300;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly color: {
        readonly type: ObjectConstructor;
    };
    readonly modelValue: {
        readonly type: import("vue").PropType<import("../../utils/color-utils-types").ColorPickerColor>;
        readonly default: {};
    };
    readonly rgba: {
        readonly type: ObjectConstructor;
        readonly default: null;
    };
    readonly height: {
        readonly type: NumberConstructor;
        readonly default: 15;
    };
    readonly width: {
        readonly type: NumberConstructor;
        readonly default: 300;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    readonly height: number;
    readonly width: number;
    readonly modelValue: import("../../utils/color-utils-types").ColorPickerColor;
    readonly rgba: Record<string, any>;
}>;
export default _default;
