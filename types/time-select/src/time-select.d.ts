declare const _default: import("vue").DefineComponent<{
    readonly modelValue: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly start: {
        readonly type: StringConstructor;
        readonly default: "00:00";
    };
    readonly end: {
        readonly type: StringConstructor;
        readonly default: "24:00";
    };
    readonly step: {
        readonly type: StringConstructor;
        readonly default: "00:30";
    };
    readonly minTime: {
        readonly type: StringConstructor;
        readonly default: "-1:-1";
    };
    readonly maxTime: {
        readonly type: StringConstructor;
        readonly default: "24:00";
    };
    readonly placeholder: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly size: {
        readonly type: import("vue").PropType<"sm" | "md" | "lg">;
    };
    readonly 'onUpdate:modelValue': {
        readonly type: import("vue").PropType<(v: boolean) => void>;
    };
    readonly clearable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "blur" | "change" | "focus" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly start: {
        readonly type: StringConstructor;
        readonly default: "00:00";
    };
    readonly end: {
        readonly type: StringConstructor;
        readonly default: "24:00";
    };
    readonly step: {
        readonly type: StringConstructor;
        readonly default: "00:30";
    };
    readonly minTime: {
        readonly type: StringConstructor;
        readonly default: "-1:-1";
    };
    readonly maxTime: {
        readonly type: StringConstructor;
        readonly default: "24:00";
    };
    readonly placeholder: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly size: {
        readonly type: import("vue").PropType<"sm" | "md" | "lg">;
    };
    readonly 'onUpdate:modelValue': {
        readonly type: import("vue").PropType<(v: boolean) => void>;
    };
    readonly clearable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
}>>, {
    readonly end: string;
    readonly start: string;
    readonly disabled: boolean;
    readonly step: string;
    readonly placeholder: string;
    readonly modelValue: string;
    readonly clearable: boolean;
    readonly minTime: string;
    readonly maxTime: string;
}>;
export default _default;
