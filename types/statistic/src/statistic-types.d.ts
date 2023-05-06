import type { ExtractPropTypes } from 'vue';
export declare const statisticProps: {
    readonly title: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly value: {
        readonly type: readonly [NumberConstructor, StringConstructor];
    };
    readonly prefix: {
        readonly type: StringConstructor;
    };
    readonly suffix: {
        readonly type: StringConstructor;
    };
    readonly precision: {
        readonly type: NumberConstructor;
    };
    readonly groupSeparator: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly animationDuration: {
        readonly type: NumberConstructor;
        readonly default: 2000;
    };
    readonly valueFrom: {
        readonly type: NumberConstructor;
    };
    readonly animation: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly start: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly extra: {
        readonly type: StringConstructor;
        readonly default: "";
    };
};
export declare type StatisticProps = ExtractPropTypes<typeof statisticProps>;
