import './menu.scss';
declare const _default: import("vue").DefineComponent<{
    readonly width: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly collapsed: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly collapsedIndent: {
        readonly type: NumberConstructor;
        readonly default: 24;
    };
    readonly indentSize: {
        readonly type: NumberConstructor;
        readonly default: 24;
    };
    readonly multiple: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly openKeys: {
        readonly type: ArrayConstructor;
        readonly default: readonly [];
    };
    readonly defaultSelectKeys: {
        readonly type: ArrayConstructor;
        readonly default: readonly [];
    };
    readonly mode: {
        readonly type: () => import("./menu-types").menuMode;
        readonly default: "vertical";
    };
    readonly router: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "deselect" | "submenu-change")[], "select" | "deselect" | "submenu-change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly width: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly collapsed: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly collapsedIndent: {
        readonly type: NumberConstructor;
        readonly default: 24;
    };
    readonly indentSize: {
        readonly type: NumberConstructor;
        readonly default: 24;
    };
    readonly multiple: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly openKeys: {
        readonly type: ArrayConstructor;
        readonly default: readonly [];
    };
    readonly defaultSelectKeys: {
        readonly type: ArrayConstructor;
        readonly default: readonly [];
    };
    readonly mode: {
        readonly type: () => import("./menu-types").menuMode;
        readonly default: "vertical";
    };
    readonly router: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
}>> & {
    onSelect?: ((...args: any[]) => any) | undefined;
    onDeselect?: ((...args: any[]) => any) | undefined;
    "onSubmenu-change"?: ((...args: any[]) => any) | undefined;
}, {
    readonly width: string;
    readonly multiple: boolean;
    readonly mode: import("./menu-types").menuMode;
    readonly openKeys: unknown[];
    readonly collapsed: boolean;
    readonly collapsedIndent: number;
    readonly indentSize: number;
    readonly defaultSelectKeys: unknown[];
    readonly router: boolean;
}>;
export default _default;
