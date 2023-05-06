import type { PropType, ExtractPropTypes } from 'vue';
import type { ColorPickerColor } from '../../utils/color-utils-types';
export declare const colorPickerBasicColorProps: {
    readonly color: {
        readonly type: PropType<ColorPickerColor>;
    };
};
export declare type ColorPickerBasicColorProps = ExtractPropTypes<typeof colorPickerBasicColorProps>;
