import './card.scss';
declare const _default: import("vue").DefineComponent<{
    readonly align: {
        readonly type: import("vue").PropType<"end" | "start" | "spaceBetween">;
        readonly default: "start";
    };
    readonly src: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly shadow: {
        readonly type: import("vue").PropType<"always" | "never" | "hover">;
        readonly default: "hover";
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly align: {
        readonly type: import("vue").PropType<"end" | "start" | "spaceBetween">;
        readonly default: "start";
    };
    readonly src: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly shadow: {
        readonly type: import("vue").PropType<"always" | "never" | "hover">;
        readonly default: "hover";
    };
}>>, {
    readonly src: string;
    readonly align: "end" | "start" | "spaceBetween";
    readonly shadow: "always" | "never" | "hover";
}>;
export default _default;
