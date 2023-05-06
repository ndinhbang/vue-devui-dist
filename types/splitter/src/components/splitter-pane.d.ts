import './splitter-pane.scss';
declare const _default: import("vue").DefineComponent<{
    readonly size: {
        readonly type: StringConstructor;
    };
    readonly minSize: {
        readonly type: StringConstructor;
    };
    readonly maxSize: {
        readonly type: StringConstructor;
    };
    readonly resizable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly collapsible: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly collapsed: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly collapseDirection: {
        readonly type: import("vue").PropType<import("../splitter-types").CollapseDirection>;
        readonly default: "both";
    };
    readonly shrink: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly shrinkWidth: {
        readonly type: NumberConstructor;
        readonly default: 36;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("sizeChange" | "collapsedChange")[], "sizeChange" | "collapsedChange", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly size: {
        readonly type: StringConstructor;
    };
    readonly minSize: {
        readonly type: StringConstructor;
    };
    readonly maxSize: {
        readonly type: StringConstructor;
    };
    readonly resizable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly collapsible: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly collapsed: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly collapseDirection: {
        readonly type: import("vue").PropType<import("../splitter-types").CollapseDirection>;
        readonly default: "both";
    };
    readonly shrink: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly shrinkWidth: {
        readonly type: NumberConstructor;
        readonly default: 36;
    };
}>> & {
    onSizeChange?: ((...args: any[]) => any) | undefined;
    onCollapsedChange?: ((...args: any[]) => any) | undefined;
}, {
    readonly collapsed: boolean;
    readonly resizable: boolean;
    readonly collapsible: boolean;
    readonly collapseDirection: import("../splitter-types").CollapseDirection;
    readonly shrink: boolean;
    readonly shrinkWidth: number;
}>;
export default _default;
