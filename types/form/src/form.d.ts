declare const _default: import("vue").DefineComponent<{
    readonly data: {
        readonly type: import("vue").PropType<import("./form-types").FormData>;
        readonly default: () => {};
    };
    readonly layout: {
        readonly type: import("vue").PropType<import("./form-types").Layout>;
        readonly default: "horizontal";
    };
    readonly labelSize: {
        readonly type: import("vue").PropType<import("./form-types").LabelSize>;
        readonly default: "md";
    };
    readonly labelAlign: {
        readonly type: import("vue").PropType<import("./form-types").LabelAlign>;
        readonly default: "start";
    };
    readonly rules: {
        readonly type: import("vue").PropType<Partial<Record<string, import("..").FormRuleItem[]>>>;
    };
    readonly messageType: {
        readonly type: import("vue").PropType<import("..").MessageType>;
        readonly default: "popover";
    };
    readonly popPosition: {
        readonly type: import("vue").PropType<import("..").PopPosition[]>;
        readonly default: readonly ["right", "bottom"];
    };
    readonly validateOnRuleChange: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly showFeedback: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly size: {
        readonly type: import("vue").PropType<import("./form-types").FormSize>;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "validate", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly data: {
        readonly type: import("vue").PropType<import("./form-types").FormData>;
        readonly default: () => {};
    };
    readonly layout: {
        readonly type: import("vue").PropType<import("./form-types").Layout>;
        readonly default: "horizontal";
    };
    readonly labelSize: {
        readonly type: import("vue").PropType<import("./form-types").LabelSize>;
        readonly default: "md";
    };
    readonly labelAlign: {
        readonly type: import("vue").PropType<import("./form-types").LabelAlign>;
        readonly default: "start";
    };
    readonly rules: {
        readonly type: import("vue").PropType<Partial<Record<string, import("..").FormRuleItem[]>>>;
    };
    readonly messageType: {
        readonly type: import("vue").PropType<import("..").MessageType>;
        readonly default: "popover";
    };
    readonly popPosition: {
        readonly type: import("vue").PropType<import("..").PopPosition[]>;
        readonly default: readonly ["right", "bottom"];
    };
    readonly validateOnRuleChange: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly showFeedback: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly size: {
        readonly type: import("vue").PropType<import("./form-types").FormSize>;
    };
}>>, {
    readonly data: import("./form-types").FormData;
    readonly messageType: import("..").MessageType;
    readonly disabled: boolean;
    readonly layout: import("./form-types").Layout;
    readonly popPosition: import("..").PopPosition[];
    readonly showFeedback: boolean;
    readonly labelSize: import("./form-types").LabelSize;
    readonly labelAlign: import("./form-types").LabelAlign;
    readonly validateOnRuleChange: boolean;
}>;
export default _default;
