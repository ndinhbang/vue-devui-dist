import './steps.scss';
declare const _default: import("vue").DefineComponent<{
    readonly modelValue: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly space: {
        readonly type: NumberConstructor;
    };
    readonly alignCenter: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly direction: {
        readonly type: import("vue").PropType<import("./steps-types").IStepsDirection>;
        readonly default: "horizontal";
    };
    readonly simple: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly space: {
        readonly type: NumberConstructor;
    };
    readonly alignCenter: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly direction: {
        readonly type: import("vue").PropType<import("./steps-types").IStepsDirection>;
        readonly default: "horizontal";
    };
    readonly simple: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    readonly direction: import("./steps-types").IStepsDirection;
    readonly simple: boolean;
    readonly modelValue: number;
    readonly alignCenter: boolean;
}>;
export default _default;
