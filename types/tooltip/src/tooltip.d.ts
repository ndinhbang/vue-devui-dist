import './tooltip.scss';
declare const _default: import("vue").DefineComponent<{
    content: {
        type: StringConstructor;
        default: string;
    };
    position: {
        type: import("vue").PropType<import("./tooltip-types").BasePlacement | import("./tooltip-types").BasePlacement[]>;
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
    enterable: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideAfter: {
        type: NumberConstructor;
        default: number;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    content: {
        type: StringConstructor;
        default: string;
    };
    position: {
        type: import("vue").PropType<import("./tooltip-types").BasePlacement | import("./tooltip-types").BasePlacement[]>;
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
    enterable: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideAfter: {
        type: NumberConstructor;
        default: number;
    };
}>>, {
    content: string;
    position: import("./tooltip-types").BasePlacement | import("./tooltip-types").BasePlacement[];
    disabled: boolean;
    showAnimation: boolean;
    mouseEnterDelay: number;
    mouseLeaveDelay: number;
    enterable: boolean;
    hideAfter: number;
}>;
export default _default;
