import './comment.scss';
declare const _default: import("vue").DefineComponent<{
    readonly author: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly avatar: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly datetime: {
        readonly type: StringConstructor;
        readonly default: "";
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly author: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly avatar: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly datetime: {
        readonly type: StringConstructor;
        readonly default: "";
    };
}>>, {
    readonly datetime: string;
    readonly avatar: string;
    readonly author: string;
}>;
export default _default;
