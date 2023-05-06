import './switch.scss';
declare const _default: import("vue").DefineComponent<{
    readonly modelValue: {
        readonly type: import("vue").PropType<string | number | boolean>;
        readonly default: false;
    };
    readonly size: {
        readonly type: import("vue").PropType<import("./switch-types").SwitchSize>;
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: undefined;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly beforeChange: {
        readonly type: import("vue").PropType<(v: boolean) => boolean | Promise<boolean>>;
        readonly default: undefined;
    };
    readonly change: {
        readonly type: import("vue").PropType<(v: boolean) => void>;
        readonly default: undefined;
    };
    readonly activeValue: {
        readonly type: import("vue").PropType<string | number | boolean>;
        readonly default: true;
    };
    readonly inactiveValue: {
        readonly type: import("vue").PropType<string | number | boolean>;
        readonly default: false;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "change" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: {
        readonly type: import("vue").PropType<string | number | boolean>;
        readonly default: false;
    };
    readonly size: {
        readonly type: import("vue").PropType<import("./switch-types").SwitchSize>;
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: undefined;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly beforeChange: {
        readonly type: import("vue").PropType<(v: boolean) => boolean | Promise<boolean>>;
        readonly default: undefined;
    };
    readonly change: {
        readonly type: import("vue").PropType<(v: boolean) => void>;
        readonly default: undefined;
    };
    readonly activeValue: {
        readonly type: import("vue").PropType<string | number | boolean>;
        readonly default: true;
    };
    readonly inactiveValue: {
        readonly type: import("vue").PropType<string | number | boolean>;
        readonly default: false;
    };
}>>, {
    readonly color: string;
    readonly change: (v: boolean) => void;
    readonly disabled: boolean;
    readonly modelValue: string | number | boolean;
    readonly beforeChange: (v: boolean) => boolean | Promise<boolean>;
    readonly activeValue: string | number | boolean;
    readonly inactiveValue: string | number | boolean;
}>;
export default _default;
