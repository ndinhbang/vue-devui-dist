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
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
}>>, {
    type: import("../panel-types").PanelType;
    cssClass: string;
    showAnimation: boolean;
    isCollapsed: boolean;
    beforeToggle: (value: boolean, done?: (() => void) | undefined) => unknown;
    hasLeftPadding: boolean;
}>;
export default _default;
