import './skeleton-item.scss';
declare const _default: import("vue").DefineComponent<{
    readonly variant: {
        readonly type: import("vue").PropType<import("./skeleton-item-types").IVariant>;
        readonly default: "square";
    };
    readonly size: {
        readonly type: import("vue").PropType<import("./skeleton-item-types").ISize>;
        readonly default: "md";
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly variant: {
        readonly type: import("vue").PropType<import("./skeleton-item-types").IVariant>;
        readonly default: "square";
    };
    readonly size: {
        readonly type: import("vue").PropType<import("./skeleton-item-types").ISize>;
        readonly default: "md";
    };
}>>, {
    readonly size: import("./skeleton-item-types").ISize;
    readonly variant: import("./skeleton-item-types").IVariant;
}>;
export default _default;
