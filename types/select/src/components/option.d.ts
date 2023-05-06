declare const _default: import("vue").DefineComponent<{
    value: {
        type: import("vue").PropType<import("../select-types").OptionModelValue>;
        default: string;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    create: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    value: {
        type: import("vue").PropType<import("../select-types").OptionModelValue>;
        default: string;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    create: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    name: string;
    value: import("../select-types").OptionModelValue;
    disabled: boolean;
    create: boolean;
}>;
export default _default;
