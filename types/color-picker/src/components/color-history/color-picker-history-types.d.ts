import type { PropType, ExtractPropTypes } from 'vue';
import type { ColorPickerColor } from '../../utils/color-utils-types';
export declare const colorPickerHistoryProps: {
    readonly color: {
        readonly type: PropType<ColorPickerColor>;
    };
};
export declare type ColorPickerHistoryProps = ExtractPropTypes<typeof colorPickerHistoryProps>;
