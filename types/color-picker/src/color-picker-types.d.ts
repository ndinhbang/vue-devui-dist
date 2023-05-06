import type { PropType, ExtractPropTypes } from 'vue';
export declare const colorPickerProps: {
    readonly modelValue: {
        readonly type: PropType<string | number>;
        readonly default: {};
    };
    readonly mode: {
        readonly type: StringConstructor;
    };
    readonly showAlpha: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly dotSize: {
        readonly type: NumberConstructor;
        readonly default: 15;
    };
    readonly swatches: {
        readonly type: PropType<string[]>;
    };
    readonly showHistory: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
};
export declare type ColorPickerProps = ExtractPropTypes<typeof colorPickerProps>;
