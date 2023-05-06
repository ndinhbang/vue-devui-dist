import './dropdown.scss';
declare const _default: import("vue").DefineComponent<{
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    trigger: {
        type: import("vue").PropType<import("./dropdown-types").TriggerType>;
        default: string;
    };
    closeScope: {
        type: import("vue").PropType<import("./dropdown-types").CloseScopeArea>;
        default: string;
    };
    position: {
        type: import("vue").PropType<import("./dropdown-types").Placement[]>;
        default: string[];
    };
    align: {
        type: import("vue").PropType<import("./dropdown-types").Alignment> | null;
        default: null;
    };
    offset: {
        type: import("vue").PropType<number | import("./dropdown-types").OffsetOptions>;
        default: number;
    };
    shiftOffset: {
        type: NumberConstructor;
    };
    closeOnMouseLeaveMenu: {
        type: BooleanConstructor;
        default: boolean;
    };
    showAnimation: {
        type: BooleanConstructor;
        default: boolean;
    };
    overlayClass: {
        type: StringConstructor;
        default: string;
    };
    destroyOnHide: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "toggle"[], "toggle", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    trigger: {
        type: import("vue").PropType<import("./dropdown-types").TriggerType>;
        default: string;
    };
    closeScope: {
        type: import("vue").PropType<import("./dropdown-types").CloseScopeArea>;
        default: string;
    };
    position: {
        type: import("vue").PropType<import("./dropdown-types").Placement[]>;
        default: string[];
    };
    align: {
        type: import("vue").PropType<import("./dropdown-types").Alignment> | null;
        default: null;
    };
    offset: {
        type: import("vue").PropType<number | import("./dropdown-types").OffsetOptions>;
        default: number;
    };
    shiftOffset: {
        type: NumberConstructor;
    };
    closeOnMouseLeaveMenu: {
        type: BooleanConstructor;
        default: boolean;
    };
    showAnimation: {
        type: BooleanConstructor;
        default: boolean;
    };
    overlayClass: {
        type: StringConstructor;
        default: string;
    };
    destroyOnHide: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onToggle?: ((...args: any[]) => any) | undefined;
}, {
    offset: number | import("./dropdown-types").OffsetOptions;
    position: import("./dropdown-types").Placement[];
    visible: boolean;
    align: import("./dropdown-types").Alignment;
    showAnimation: boolean;
    trigger: import("./dropdown-types").TriggerType;
    closeScope: import("./dropdown-types").CloseScopeArea;
    closeOnMouseLeaveMenu: boolean;
    overlayClass: string;
    destroyOnHide: boolean;
}>;
export default _default;
