import './color-hue-slider.scss';
declare const _default: import("vue").DefineComponent<{
    readonly color: {
        readonly type: ObjectConstructor;
    };
    readonly modelValue: {
        readonly type: import("vue").PropType<import("../../utils/color-utils-types").ColorPickerColor>;
    };
    readonly width: {
        readonly type: NumberConstructor;
        readonly default: 300;
    };
    readonly height: {
        readonly type: NumberConstructor;
        readonly default: 15;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly color: {
        readonly type: ObjectConstructor;
    };
    readonly modelValue: {
        readonly type: import("vue").PropType<import("../../utils/color-utils-types").ColorPickerColor>;
    };
    readonly width: {
        readonly type: NumberConstructor;
        readonly default: 300;
    };
    readonly height: {
        readonly type: NumberConstructor;
        readonly default: 15;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    readonly height: number;
    readonly width: number;
}>;
export default _default;
