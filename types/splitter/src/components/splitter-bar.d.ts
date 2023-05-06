import './splitter-bar.scss';
declare const _default: import("vue").DefineComponent<{
    readonly index: {
        readonly type: NumberConstructor;
    };
    readonly orientation: {
        readonly type: import("vue").PropType<import("../splitter-types").SplitterOrientation>;
        readonly required: true;
    };
    readonly splitBarSize: {
        readonly type: StringConstructor;
        readonly required: true;
    };
    readonly disabledBarSize: {
        readonly type: StringConstructor;
        readonly default: "1px";
    };
    readonly showCollapseButton: {
        readonly type: BooleanConstructor;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly index: {
        readonly type: NumberConstructor;
    };
    readonly orientation: {
        readonly type: import("vue").PropType<import("../splitter-types").SplitterOrientation>;
        readonly required: true;
    };
    readonly splitBarSize: {
        readonly type: StringConstructor;
        readonly required: true;
    };
    readonly disabledBarSize: {
        readonly type: StringConstructor;
        readonly default: "1px";
    };
    readonly showCollapseButton: {
        readonly type: BooleanConstructor;
    };
}>>, {
    readonly disabledBarSize: string;
    readonly showCollapseButton: boolean;
}>;
export default _default;
