import './time-picker.scss';
declare const _default: import("vue").DefineComponent<{
    readonly modelValue: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly placeholder: {
        readonly type: StringConstructor;
        readonly default: "00:00:00";
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly timePickerWidth: {
        readonly type: NumberConstructor;
        readonly default: 212;
    };
    readonly minTime: {
        readonly type: StringConstructor;
        readonly default: "00:00:00";
    };
    readonly maxTime: {
        readonly type: StringConstructor;
        readonly default: "23:59:59";
    };
    readonly format: {
        readonly type: StringConstructor;
        readonly default: "hh:mm:ss";
    };
    readonly autoOpen: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly showAnimation: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly size: {
        readonly type: import("vue").PropType<import("./types").sizeType>;
    };
    readonly readonly: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "change" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly placeholder: {
        readonly type: StringConstructor;
        readonly default: "00:00:00";
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly timePickerWidth: {
        readonly type: NumberConstructor;
        readonly default: 212;
    };
    readonly minTime: {
        readonly type: StringConstructor;
        readonly default: "00:00:00";
    };
    readonly maxTime: {
        readonly type: StringConstructor;
        readonly default: "23:59:59";
    };
    readonly format: {
        readonly type: StringConstructor;
        readonly default: "hh:mm:ss";
    };
    readonly autoOpen: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly showAnimation: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly size: {
        readonly type: import("vue").PropType<import("./types").sizeType>;
    };
    readonly readonly: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
}>>, {
    readonly disabled: boolean;
    readonly readonly: boolean;
    readonly placeholder: string;
    readonly format: string;
    readonly modelValue: string;
    readonly showAnimation: boolean;
    readonly minTime: string;
    readonly maxTime: string;
    readonly timePickerWidth: number;
    readonly autoOpen: boolean;
}>;
export default _default;
