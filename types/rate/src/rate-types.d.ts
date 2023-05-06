import { ExtractPropTypes, PropType } from 'vue';
declare type RateStatusType = PropType<'success' | 'warning' | 'error'>;
export declare const rateProps: {
    readonly modelValue: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly read: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly count: {
        readonly type: NumberConstructor;
        readonly default: 5;
    };
    readonly type: {
        readonly type: RateStatusType;
        readonly default: "";
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly icon: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly character: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly allowHalf: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly onChange: {
        readonly type: PropType<(value: number) => void>;
        readonly default: undefined;
    };
    readonly onTouched: {
        readonly type: PropType<() => void>;
        readonly default: undefined;
    };
};
export declare type RateProps = ExtractPropTypes<typeof rateProps>;
export {};
