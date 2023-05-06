import './input-number.scss';
declare const _default: import("vue").DefineComponent<{
    readonly placeholder: {
        readonly type: StringConstructor;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly step: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly max: {
        readonly type: NumberConstructor;
        readonly default: number;
    };
    readonly min: {
        readonly type: NumberConstructor;
        readonly default: number;
    };
    readonly size: {
        readonly type: import("vue").PropType<import("./input-number-types").ISize>;
    };
    readonly modelValue: {
        readonly type: NumberConstructor;
    };
    readonly precision: {
        readonly type: NumberConstructor;
    };
    readonly reg: {
        readonly type: import("vue").PropType<string | RegExp>;
        readonly default: "";
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "input" | "change" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly placeholder: {
        readonly type: StringConstructor;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly step: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly max: {
        readonly type: NumberConstructor;
        readonly default: number;
    };
    readonly min: {
        readonly type: NumberConstructor;
        readonly default: number;
    };
    readonly size: {
        readonly type: import("vue").PropType<import("./input-number-types").ISize>;
    };
    readonly modelValue: {
        readonly type: NumberConstructor;
    };
    readonly precision: {
        readonly type: NumberConstructor;
    };
    readonly reg: {
        readonly type: import("vue").PropType<string | RegExp>;
        readonly default: "";
    };
}>>, {
    readonly max: number;
    readonly disabled: boolean;
    readonly step: number;
    readonly min: number;
    readonly reg: string | RegExp;
}>;
export default _default;
