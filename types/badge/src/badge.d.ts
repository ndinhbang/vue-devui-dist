import './badge.scss';
declare const _default: import("vue").DefineComponent<{
    count: {
        type: (StringConstructor | NumberConstructor)[];
    };
    maxCount: {
        type: NumberConstructor;
        default: number;
    };
    showDot: {
        type: BooleanConstructor;
        default: boolean;
    };
    status: {
        type: import("vue").PropType<import("./badge-types").BadgeStatusType>;
        validator: (val: string) => boolean;
        default: string;
    };
    position: {
        type: import("vue").PropType<import("./badge-types").BadgePositionType>;
        default: string;
        validator: (val: string) => boolean;
    };
    offset: {
        type: import("vue").PropType<number[]>;
    };
    bgColor: {
        type: StringConstructor;
    };
    textColor: {
        type: StringConstructor;
    };
    hidden: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    count: {
        type: (StringConstructor | NumberConstructor)[];
    };
    maxCount: {
        type: NumberConstructor;
        default: number;
    };
    showDot: {
        type: BooleanConstructor;
        default: boolean;
    };
    status: {
        type: import("vue").PropType<import("./badge-types").BadgeStatusType>;
        validator: (val: string) => boolean;
        default: string;
    };
    position: {
        type: import("vue").PropType<import("./badge-types").BadgePositionType>;
        default: string;
        validator: (val: string) => boolean;
    };
    offset: {
        type: import("vue").PropType<number[]>;
    };
    bgColor: {
        type: StringConstructor;
    };
    textColor: {
        type: StringConstructor;
    };
    hidden: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    position: import("./badge-types").BadgePositionType;
    hidden: boolean;
    status: import("./badge-types").BadgeStatusType;
    maxCount: number;
    showDot: boolean;
}>;
export default _default;
