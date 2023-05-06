import './countdown.scss';
declare const _default: import("vue").DefineComponent<{
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
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("onChange" | "onFinish")[], "onChange" | "onFinish", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
}>> & {
    onOnChange?: ((...args: any[]) => any) | undefined;
    onOnFinish?: ((...args: any[]) => any) | undefined;
}, {
    readonly prefix: string;
    readonly format: string;
    readonly suffix: string;
    readonly valueStyle: Record<string, any>;
}>;
export default _default;
