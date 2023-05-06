import './color-history.scss';
import { ColorPickerColor } from '../../utils/color-utils-types';
declare const _default: import("vue").DefineComponent<{
    readonly color: {
        readonly type: import("vue").PropType<ColorPickerColor>;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:color"[], "update:color", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly color: {
        readonly type: import("vue").PropType<ColorPickerColor>;
    };
}>> & {
    "onUpdate:color"?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _default;
