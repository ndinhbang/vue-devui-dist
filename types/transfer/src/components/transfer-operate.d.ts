declare const _default: import("vue").DefineComponent<{
    readonly sourceDisabled: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly targetDisabled: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly onToTarget: {
        readonly type: import("vue").PropType<() => void>;
    };
    readonly onToSource: {
        readonly type: import("vue").PropType<() => void>;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly sourceDisabled: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly targetDisabled: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly onToTarget: {
        readonly type: import("vue").PropType<() => void>;
    };
    readonly onToSource: {
        readonly type: import("vue").PropType<() => void>;
    };
}>>, {
    readonly sourceDisabled: boolean;
    readonly targetDisabled: boolean;
}>;
export default _default;
