declare const _default: import("vue").DefineComponent<{
    type: {
        type: () => import("../panel-types").PanelType;
        default: string;
    };
    cssClass: {
        type: StringConstructor;
        default: string;
    };
    isCollapsed: {
        type: BooleanConstructor;
        default: boolean;
    };
    beforeToggle: {
        type: () => (value: boolean, done?: (() => void) | undefined) => unknown;
        default: null;
    };
    showAnimation: {
        type: BooleanConstructor;
        default: boolean;
    };
    hasLeftPadding: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => JSX.Element | null, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "toggle"[], "toggle", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: () => import("../panel-types").PanelType;
        default: string;
    };
    cssClass: {
        type: StringConstructor;
        default: string;
    };
    isCollapsed: {
        type: BooleanConstructor;
        default: boolean;
    };
    beforeToggle: {
        type: () => (value: boolean, done?: (() => void) | undefined) => unknown;
        default: null;
    };
    showAnimation: {
        type: BooleanConstructor;
        default: boolean;
    };
    hasLeftPadding: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onToggle?: ((...args: any[]) => any) | undefined;
}, {
    type: import("../panel-types").PanelType;
    cssClass: string;
    showAnimation: boolean;
    isCollapsed: boolean;
    beforeToggle: (value: boolean, done?: (() => void) | undefined) => unknown;
    hasLeftPadding: boolean;
}>;
export default _default;
