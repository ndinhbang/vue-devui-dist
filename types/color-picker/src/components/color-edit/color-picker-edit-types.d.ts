import type { PropType, ExtractPropTypes } from 'vue';
import { ColorPickerColor } from '../../utils/color-utils-types';
export declare const colorPickerEditProps: {
    /**
     * 选择器圆点大小
     */
    readonly showAlpha: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly mode: {
        readonly type: StringConstructor;
    };
    readonly color: {
        readonly type: PropType<ColorPickerColor>;
    };
};
export declare type ColorPickerEditProps = ExtractPropTypes<typeof colorPickerEditProps>;
