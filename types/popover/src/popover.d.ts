import './popover.scss';
declare const _default: import("vue").DefineComponent<{
    isOpen: {
        type: BooleanConstructor;
        default: boolean;
    };
    position: {
        type: import("vue").PropType<import("./popover-types").Placement[]>;
        default: string[];
    };
    align: {
        type: import("vue").PropType<import("./popover-types").Alignment> | null;
        default: null;
    };
    offset: {
        type: import("vue").PropType<number | import("./popover-types").OffsetOptions>;
        default: number;
    };
    content: {
        type: StringConstructor;
        default: string;
    };
    trigger: {
        type: import("vue").PropType<import("./popover-types").TriggerType>;
        default: string;
    };
    popType: {
        type: import("vue").PropType<import("./popover-types").PopType>;
        default: string;
    };
    showAnimation: {
        type: BooleanConstructor;
        default: boolean;
    };
    mouseEnterDelay: {
        type: NumberConstructor;
        default: number;
    };
    mouseLeaveDelay: {
        type: NumberConstructor;
        default: number;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("hide" | "show")[], "hide" | "show", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    isOpen: {
        type: BooleanConstructor;
        default: boolean;
    };
    position: {
        type: import("vue").PropType<import("./popover-types").Placement[]>;
        default: string[];
    };
    align: {
        type: import("vue").PropType<import("./popover-types").Alignment> | null;
        default: null;
    };
    offset: {
        type: import("vue").PropType<number | import("./popover-types").OffsetOptions>;
        default: number;
    };
    content: {
        type: StringConstructor;
        default: string;
    };
    trigger: {
        type: import("vue").PropType<import("./popover-types").TriggerType>;
        default: string;
    };
    popType: {
        type: import("vue").PropType<import("./popover-types").PopType>;
        default: string;
    };
    showAnimation: {
        type: BooleanConstructor;
        default: boolean;
    };
    mouseEnterDelay: {
        type: NumberConstructor;
        default: number;
    };
    mouseLeaveDelay: {
        type: NumberConstructor;
        default: number;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onHide?: ((...args: any[]) => any) | undefined;
    onShow?: ((...args: any[]) => any) | undefined;
}, {
    offset: number | import("./popover-types").OffsetOptions;
    content: string;
    position: import("./popover-types").Placement[];
    disabled: boolean;
    align: import("./popover-types").Alignment;
    showAnimation: boolean;
    trigger: import("./popover-types").TriggerType;
    isOpen: boolean;
    popType: import("./popover-types").PopType;
    mouseEnterDelay: number;
    mouseLeaveDelay: number;
}>;
export default _default;
