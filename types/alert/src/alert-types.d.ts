import { ExtractPropTypes } from 'vue';
export declare type AlertType = 'success' | 'danger' | 'warning' | 'info' | 'simple';
export declare const alertProps: {
    readonly type: {
        readonly type: () => AlertType;
        readonly default: "info";
    };
    readonly cssClass: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly closeable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly showIcon: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly dismissTime: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly center: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
};
export declare type AlertProps = ExtractPropTypes<typeof alertProps>;
