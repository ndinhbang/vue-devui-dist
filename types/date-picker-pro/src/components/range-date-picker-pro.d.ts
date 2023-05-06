import '../date-picker-pro.scss';
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
    readonly modelValue: {
        readonly type: import("vue").PropType<(string | Date)[]>;
        readonly default: readonly ["", ""];
    };
    readonly placeholder: {
        readonly type: import("vue").PropType<string[]>;
        readonly default: readonly ["", ""];
    };
    readonly separator: {
        readonly type: StringConstructor;
        readonly default: "-";
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "blur" | "focus" | "update:modelValue" | "toggleChange" | "confirmEvent", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
    readonly modelValue: {
        readonly type: import("vue").PropType<(string | Date)[]>;
        readonly default: readonly ["", ""];
    };
    readonly placeholder: {
        readonly type: import("vue").PropType<string[]>;
        readonly default: readonly ["", ""];
    };
    readonly separator: {
        readonly type: StringConstructor;
        readonly default: "-";
    };
}>>, {
    readonly type: string;
    readonly disabled: boolean;
    readonly size: import("../../../input").InputSize;
    readonly separator: string;
    readonly placeholder: string[];
    readonly modelValue: (string | Date)[];
    readonly showTime: boolean;
    readonly calendarRange: number[];
}>;
export default _default;
