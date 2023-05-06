import type { ExtractPropTypes } from 'vue';
export declare type ResultIcon = 'success' | 'danger' | 'warning' | 'info';
export declare const resultProps: {
    readonly icon: {
        readonly type: () => ResultIcon;
        readonly default: "info";
    };
    readonly title: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly desc: {
        readonly type: StringConstructor;
        readonly default: "";
    };
};
export declare type ResultProps = ExtractPropTypes<typeof resultProps>;
