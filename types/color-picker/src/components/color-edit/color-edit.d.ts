import type { ColorPickerColor } from '../../utils/color-utils-types';
import './color-edit.scss';
declare const _default: import("vue").DefineComponent<{
    readonly showAlpha: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly mode: {
        readonly type: StringConstructor;
    };
    readonly color: {
        readonly type: import("vue").PropType<ColorPickerColor>;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "changeTextModeColor")[], "update:modelValue" | "changeTextModeColor", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly showAlpha: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly mode: {
        readonly type: StringConstructor;
    };
    readonly color: {
        readonly type: import("vue").PropType<ColorPickerColor>;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onChangeTextModeColor?: ((...args: any[]) => any) | undefined;
}, {
    readonly showAlpha: boolean;
}>;
export default _default;
