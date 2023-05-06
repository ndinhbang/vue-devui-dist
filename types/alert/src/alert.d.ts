import './alert.scss';
declare const _default: import("vue").DefineComponent<{
    readonly type: {
        readonly type: () => import("./alert-types").AlertType;
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
}, () => JSX.Element | null, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "close"[], "close", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly type: {
        readonly type: () => import("./alert-types").AlertType;
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
}>> & {
    onClose?: ((...args: any[]) => any) | undefined;
}, {
    readonly type: import("./alert-types").AlertType;
    readonly center: boolean;
    readonly cssClass: string;
    readonly closeable: boolean;
    readonly showIcon: boolean;
    readonly dismissTime: number;
}>;
export default _default;
