import './radio.scss';
declare const _default: import("vue").DefineComponent<{
    readonly value: {
        readonly type: import("vue").PropType<import("./radio-types").valueTypes>;
        readonly required: true;
        readonly default: null;
    };
    readonly border: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly modelValue: {
        type: import("vue").PropType<import("./radio-types").valueTypes>;
        default: null;
    };
    readonly name: {
        type: import("vue").PropType<string | undefined>;
        default: null;
    };
    readonly beforeChange: {
        type: import("vue").PropType<(value: import("./radio-types").valueTypes) => boolean | Promise<boolean>>;
        default: null;
    };
    readonly disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly size: {
        type: import("vue").PropType<import("./radio-types").sizeTypes>;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "change" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly value: {
        readonly type: import("vue").PropType<import("./radio-types").valueTypes>;
        readonly required: true;
        readonly default: null;
    };
    readonly border: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly modelValue: {
        type: import("vue").PropType<import("./radio-types").valueTypes>;
        default: null;
    };
    readonly name: {
        type: import("vue").PropType<string | undefined>;
        default: null;
    };
    readonly beforeChange: {
        type: import("vue").PropType<(value: import("./radio-types").valueTypes) => boolean | Promise<boolean>>;
        default: null;
    };
    readonly disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly size: {
        type: import("vue").PropType<import("./radio-types").sizeTypes>;
    };
}>>, {
    readonly name: string | undefined;
    readonly border: boolean;
    readonly value: import("./radio-types").valueTypes;
    readonly disabled: boolean;
    readonly modelValue: import("./radio-types").valueTypes;
    readonly beforeChange: (value: import("./radio-types").valueTypes) => boolean | Promise<boolean>;
}>;
export default _default;
