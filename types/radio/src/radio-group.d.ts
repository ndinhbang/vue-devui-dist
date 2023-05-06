import './radio-group.scss';
declare const _default: import("vue").DefineComponent<{
    readonly values: {
        readonly type: import("vue").PropType<(string | number)[] | null>;
        readonly default: null;
    };
    readonly direction: {
        readonly type: import("vue").PropType<"column" | "row">;
        readonly default: "column";
    };
    readonly border: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly fill: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly textColor: {
        readonly type: StringConstructor;
        readonly default: "";
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
    readonly values: {
        readonly type: import("vue").PropType<(string | number)[] | null>;
        readonly default: null;
    };
    readonly direction: {
        readonly type: import("vue").PropType<"column" | "row">;
        readonly default: "column";
    };
    readonly border: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly fill: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly textColor: {
        readonly type: StringConstructor;
        readonly default: "";
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
    readonly values: (string | number)[] | null;
    readonly fill: string;
    readonly name: string | undefined;
    readonly border: boolean;
    readonly direction: "column" | "row";
    readonly disabled: boolean;
    readonly modelValue: import("./radio-types").valueTypes;
    readonly textColor: string;
    readonly beforeChange: (value: import("./radio-types").valueTypes) => boolean | Promise<boolean>;
}>;
export default _default;
