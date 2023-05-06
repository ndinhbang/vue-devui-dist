import type { PropType, ExtractPropTypes } from 'vue';
import { ColorPickerColor } from '../../utils/color-utils-types';
export declare const colorPickerProps: {
    readonly colorMap: {
        readonly type: ObjectConstructor;
    };
    readonly modelValue: {
        readonly type: PropType<ColorPickerColor>;
    };
    readonly showAlpha: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly mode: {
        readonly type: StringConstructor;
    };
};
export declare type ColorPickerProps = ExtractPropTypes<typeof colorPickerProps>;
