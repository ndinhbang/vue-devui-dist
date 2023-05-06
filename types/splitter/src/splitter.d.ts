import './splitter.scss';
declare const _default: import("vue").DefineComponent<{
    readonly orientation: {
        readonly type: import("vue").PropType<import("./splitter-types").SplitterOrientation>;
        readonly default: "horizontal";
    };
    readonly splitBarSize: {
        readonly type: StringConstructor;
        readonly default: "2px";
    };
    readonly disabledBarSize: {
        readonly type: StringConstructor;
        readonly default: "1px";
    };
    readonly showCollapseButton: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, never[], never, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly orientation: {
        readonly type: import("vue").PropType<import("./splitter-types").SplitterOrientation>;
        readonly default: "horizontal";
    };
    readonly splitBarSize: {
        readonly type: StringConstructor;
        readonly default: "2px";
    };
    readonly disabledBarSize: {
        readonly type: StringConstructor;
        readonly default: "1px";
    };
    readonly showCollapseButton: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
}>> & {}, {
    readonly orientation: import("./splitter-types").SplitterOrientation;
    readonly splitBarSize: string;
    readonly disabledBarSize: string;
    readonly showCollapseButton: boolean;
}>;
export default _default;
