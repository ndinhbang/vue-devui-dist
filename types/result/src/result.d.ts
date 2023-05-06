import './result.scss';
declare const _default: import("vue").DefineComponent<{
    readonly icon: {
        readonly type: () => import("./result-types").ResultIcon;
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
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly icon: {
        readonly type: () => import("./result-types").ResultIcon;
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
}>>, {
    readonly title: string;
    readonly desc: string;
    readonly icon: import("./result-types").ResultIcon;
}>;
export default _default;
