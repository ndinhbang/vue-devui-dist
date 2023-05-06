import type { ExtractPropTypes } from 'vue';
export declare const countdownProps: {
    readonly value: {
        readonly type: NumberConstructor;
        readonly required: true;
    };
    readonly format: {
        readonly type: StringConstructor;
        readonly default: "HH:mm:ss";
    };
    readonly prefix: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly suffix: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly valueStyle: {
        readonly type: ObjectConstructor;
        readonly default: () => {};
    };
};
export interface DateFormat {
    Y?: string | number;
    M?: string | number;
    D?: string | number;
    H?: string | number;
    m?: string | number;
    s?: string | number;
    S?: string | number;
}
export declare type CountdownProps = ExtractPropTypes<typeof countdownProps>;
