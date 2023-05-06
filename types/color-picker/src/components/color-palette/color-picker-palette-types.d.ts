import type { PropType, ExtractPropTypes } from 'vue';
import type { ColorPickerColor } from '../../utils/color-utils-types';
export declare const colorPickerPaletteProps: {
    readonly modelValue: {
        readonly type: PropType<ColorPickerColor>;
        readonly default: () => Partial<ColorPickerColor>;
    };
    readonly height: {
        readonly type: NumberConstructor;
        readonly default: 200;
    };
};
export declare type ColorPickerPaletteProps = ExtractPropTypes<typeof colorPickerPaletteProps>;
