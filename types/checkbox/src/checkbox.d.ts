import './checkbox.scss';
declare const _default: import("vue").DefineComponent<{
    readonly checked: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly value: {
        readonly type: import("vue").PropType<string | number>;
    };
    readonly label: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly 'onUpdate:checked': {
        readonly type: import("vue").PropType<(v: boolean) => void>;
        readonly default: undefined;
    };
    readonly onChange: {
        readonly type: import("vue").PropType<(v: boolean) => void>;
        readonly default: undefined;
    };
    readonly modelValue: {
        readonly type: BooleanConstructor;
    };
    readonly 'onUpdate:modelValue': {
        readonly type: import("vue").PropType<(v: boolean) => void>;
    };
    readonly border: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly name: {
        readonly type: StringConstructor;
        readonly default: undefined;
    };
    readonly halfChecked: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly isShowTitle: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly title: {
        readonly type: StringConstructor;
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: undefined;
    };
    readonly showAnimation: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly beforeChange: {
        readonly type: import("vue").PropType<(isChecked: boolean, v: string | undefined) => boolean | Promise<boolean>>;
        readonly default: undefined;
    };
    readonly size: {
        readonly type: import("vue").PropType<"sm" | "md" | "lg">;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "change" | "update:modelValue" | "update:checked", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly checked: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly value: {
        readonly type: import("vue").PropType<string | number>;
    };
    readonly label: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly 'onUpdate:checked': {
        readonly type: import("vue").PropType<(v: boolean) => void>;
        readonly default: undefined;
    };
    readonly onChange: {
        readonly type: import("vue").PropType<(v: boolean) => void>;
        readonly default: undefined;
    };
    readonly modelValue: {
        readonly type: BooleanConstructor;
    };
    readonly 'onUpdate:modelValue': {
        readonly type: import("vue").PropType<(v: boolean) => void>;
    };
    readonly border: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly name: {
        readonly type: StringConstructor;
        readonly default: undefined;
    };
    readonly halfChecked: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly isShowTitle: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly title: {
        readonly type: StringConstructor;
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: undefined;
    };
    readonly showAnimation: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly beforeChange: {
        readonly type: import("vue").PropType<(isChecked: boolean, v: string | undefined) => boolean | Promise<boolean>>;
        readonly default: undefined;
    };
    readonly size: {
        readonly type: import("vue").PropType<"sm" | "md" | "lg">;
    };
}>>, {
    readonly name: string;
    readonly border: boolean;
    readonly color: string;
    readonly label: string;
    readonly disabled: boolean;
    readonly onChange: (v: boolean) => void;
    readonly checked: boolean;
    readonly modelValue: boolean;
    readonly showAnimation: boolean;
    readonly halfChecked: boolean;
    readonly 'onUpdate:checked': (v: boolean) => void;
    readonly isShowTitle: boolean;
    readonly beforeChange: (isChecked: boolean, v: string | undefined) => boolean | Promise<boolean>;
}>;
export default _default;
