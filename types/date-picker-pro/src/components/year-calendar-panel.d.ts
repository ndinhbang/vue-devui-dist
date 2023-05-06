declare const _default: import("vue").DefineComponent<{
    readonly format: {
        type: StringConstructor;
    };
    readonly showTime: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly size: {
        type: import("vue").PropType<import("../../../input").InputSize>;
        default: string;
    };
    readonly disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly calendarRange: {
        type: import("vue").PropType<number[]>;
        default: number[];
    };
    readonly limitDateRange: {
        type: import("vue").PropType<Date[]>;
    };
    readonly type: {
        type: StringConstructor;
        default: string;
    };
    readonly visible: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly dateValue: {
        readonly type: import("vue").PropType<import("dayjs").Dayjs | (import("dayjs").Dayjs | undefined)[] | undefined>;
    };
    readonly isRangeType: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly focusType: {
        readonly type: StringConstructor;
        readonly default: "start";
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "changeRangeFocusType" | "selectedDate", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly format: {
        type: StringConstructor;
    };
    readonly showTime: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly size: {
        type: import("vue").PropType<import("../../../input").InputSize>;
        default: string;
    };
    readonly disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly calendarRange: {
        type: import("vue").PropType<number[]>;
        default: number[];
    };
    readonly limitDateRange: {
        type: import("vue").PropType<Date[]>;
    };
    readonly type: {
        type: StringConstructor;
        default: string;
    };
    readonly visible: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly dateValue: {
        readonly type: import("vue").PropType<import("dayjs").Dayjs | (import("dayjs").Dayjs | undefined)[] | undefined>;
    };
    readonly isRangeType: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly focusType: {
        readonly type: StringConstructor;
        readonly default: "start";
    };
}>>, {
    readonly type: string;
    readonly visible: boolean;
    readonly disabled: boolean;
    readonly size: import("../../../input").InputSize;
    readonly showTime: boolean;
    readonly calendarRange: number[];
    readonly isRangeType: boolean;
    readonly focusType: string;
}>;
export default _default;
