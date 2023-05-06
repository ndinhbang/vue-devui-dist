import type { PropType, ExtractPropTypes } from 'vue';
import type { ColorPickerColor } from '../../utils/color-utils-types';
export declare const colorPickerAlphaSliderProps: {
    readonly color: {
        readonly type: ObjectConstructor;
    };
    readonly modelValue: {
        readonly type: PropType<ColorPickerColor>;
        readonly default: {};
    };
    readonly rgba: {
        readonly type: ObjectConstructor;
        readonly default: null;
    };
    readonly height: {
        readonly type: NumberConstructor;
        readonly default: 15;
    };
    readonly width: {
        readonly type: NumberConstructor;
        readonly default: 300;
    };
};
export declare type colorPickerAlphaSliderProps = ExtractPropTypes<typeof colorPickerAlphaSliderProps>;
