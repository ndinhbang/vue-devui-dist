import { ExtractPropTypes, PropType } from 'vue';
import { sizeType } from './types';
export declare const timePickerProps: {
    readonly modelValue: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly placeholder: {
        readonly type: StringConstructor;
        readonly default: "00:00:00";
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly timePickerWidth: {
        readonly type: NumberConstructor;
        readonly default: 212;
    };
    readonly minTime: {
        readonly type: StringConstructor;
        readonly default: "00:00:00";
    };
    readonly maxTime: {
        readonly type: StringConstructor;
        readonly default: "23:59:59";
    };
    readonly format: {
        readonly type: StringConstructor;
        readonly default: "hh:mm:ss";
    };
    readonly autoOpen: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly showAnimation: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly size: {
        readonly type: PropType<sizeType>;
    };
    readonly readonly: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
};
export declare type TimePickerProps = ExtractPropTypes<typeof timePickerProps>;
