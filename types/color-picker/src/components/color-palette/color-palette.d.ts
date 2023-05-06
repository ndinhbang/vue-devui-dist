import './color-palette.scss';
declare const _default: import("vue").DefineComponent<{
    readonly modelValue: {
        readonly type: import("vue").PropType<import("../../utils/color-utils-types").ColorPickerColor>;
        readonly default: () => Partial<import("../../utils/color-utils-types").ColorPickerColor>;
    };
    readonly height: {
        readonly type: NumberConstructor;
        readonly default: 200;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "changeTextColor")[], "update:modelValue" | "changeTextColor", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: {
        readonly type: import("vue").PropType<import("../../utils/color-utils-types").ColorPickerColor>;
        readonly default: () => Partial<import("../../utils/color-utils-types").ColorPickerColor>;
    };
    readonly height: {
        readonly type: NumberConstructor;
        readonly default: 200;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onChangeTextColor?: ((...args: any[]) => any) | undefined;
}, {
    readonly height: number;
    readonly modelValue: import("../../utils/color-utils-types").ColorPickerColor;
}>;
export default _default;
