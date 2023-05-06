import './slider.scss';
declare const _default: import("vue").DefineComponent<{
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly max: {
        readonly type: NumberConstructor;
        readonly default: 100;
    };
    readonly min: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly modelValue: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly step: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly tipsRenderer: {
        readonly type: import("vue").PropType<(val: number) => string | null>;
        readonly default: () => (value: number) => string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly max: {
        readonly type: NumberConstructor;
        readonly default: 100;
    };
    readonly min: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly modelValue: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly step: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly tipsRenderer: {
        readonly type: import("vue").PropType<(val: number) => string | null>;
        readonly default: () => (value: number) => string;
    };
}>>, {
    readonly max: number;
    readonly disabled: boolean;
    readonly step: number;
    readonly min: number;
    readonly modelValue: number;
    readonly tipsRenderer: (val: number) => string | null;
}>;
export default _default;
