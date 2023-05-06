import './color-picker-panel.scss';
declare const _default: import("vue").DefineComponent<{
    readonly colorMap: {
        readonly type: ObjectConstructor;
    };
    readonly modelValue: {
        readonly type: import("vue").PropType<import("../../utils/color-utils-types").ColorPickerColor>;
    };
    readonly showAlpha: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly mode: {
        readonly type: StringConstructor;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "changeTextColor" | "changeTriggerColor" | "changePaletteColor" | "changeTextModeType")[], "update:modelValue" | "changeTextColor" | "changeTriggerColor" | "changePaletteColor" | "changeTextModeType", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly colorMap: {
        readonly type: ObjectConstructor;
    };
    readonly modelValue: {
        readonly type: import("vue").PropType<import("../../utils/color-utils-types").ColorPickerColor>;
    };
    readonly showAlpha: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly mode: {
        readonly type: StringConstructor;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onChangeTextColor?: ((...args: any[]) => any) | undefined;
    onChangeTriggerColor?: ((...args: any[]) => any) | undefined;
    onChangePaletteColor?: ((...args: any[]) => any) | undefined;
    onChangeTextModeType?: ((...args: any[]) => any) | undefined;
}, {
    readonly showAlpha: boolean;
}>;
export default _default;
