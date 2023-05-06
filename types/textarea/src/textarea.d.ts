import './textarea.scss';
declare const _default: import("vue").DefineComponent<{
    readonly autofocus: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly showCount: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly placeholder: {
        readonly type: StringConstructor;
        readonly default: undefined;
    };
    readonly modelValue: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly error: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly resize: {
        readonly type: import("vue").PropType<import("./textarea-types").Resize>;
        readonly default: "none";
    };
    readonly autosize: {
        readonly type: import("vue").PropType<import("./textarea-types").TextareaAutoSize>;
        readonly default: false;
    };
    readonly validateEvent: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "blur" | "change" | "focus" | "keydown" | "update" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly autofocus: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly showCount: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly placeholder: {
        readonly type: StringConstructor;
        readonly default: undefined;
    };
    readonly modelValue: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly error: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly resize: {
        readonly type: import("vue").PropType<import("./textarea-types").Resize>;
        readonly default: "none";
    };
    readonly autosize: {
        readonly type: import("vue").PropType<import("./textarea-types").TextareaAutoSize>;
        readonly default: false;
    };
    readonly validateEvent: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
}>>, {
    readonly error: boolean;
    readonly resize: import("./textarea-types").Resize;
    readonly autofocus: boolean;
    readonly disabled: boolean;
    readonly placeholder: string;
    readonly autosize: import("./textarea-types").TextareaAutoSize;
    readonly modelValue: string;
    readonly validateEvent: boolean;
    readonly showCount: boolean;
}>;
export default _default;
