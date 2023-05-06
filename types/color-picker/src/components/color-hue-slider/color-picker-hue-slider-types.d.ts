import type { PropType, ExtractPropTypes } from 'vue';
import type { ColorPickerColor } from '../../utils/color-utils-types';
export declare const colorPickerHueSliderProps: {
    /**
     * 选择器圆点大小
     */
    readonly color: {
        readonly type: ObjectConstructor;
    };
    readonly modelValue: {
        readonly type: PropType<ColorPickerColor>;
    };
    readonly width: {
        readonly type: NumberConstructor;
        readonly default: 300;
    };
    readonly height: {
        readonly type: NumberConstructor;
        readonly default: 15;
    };
};
export declare type ColorPickerHueSliderProps = ExtractPropTypes<typeof colorPickerHueSliderProps>;
