import './editable-select.scss';
declare const _default: import("vue").DefineComponent<{
    readonly modelValue: {
        readonly type: import("vue").PropType<string | number>;
    };
    readonly appendToBody: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly position: {
        readonly type: import("vue").PropType<import("./editable-select-types").Placement[]>;
        readonly default: readonly ["bottom"];
    };
    readonly options: {
        readonly type: import("vue").PropType<import("./editable-select-types").Options>;
        readonly default: () => never[];
    };
    readonly width: {
        readonly type: NumberConstructor;
    };
    readonly maxHeight: {
        readonly type: NumberConstructor;
    };
    readonly size: {
        readonly type: import("vue").PropType<import("./editable-select-types").EditableSelectSize>;
    };
    readonly placeholder: {
        readonly type: StringConstructor;
        readonly default: "Select";
    };
    readonly loading: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly allowClear: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly disabledKey: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly remote: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly filterMethod: {
        readonly type: import("vue").PropType<(inputValue: string) => void>;
    };
    readonly remoteMethod: {
        readonly type: import("vue").PropType<(inputValue: string) => void>;
    };
    readonly enableLazyLoad: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "clear" | "blur" | "change" | "focus" | "loadMore" | "update:modelValue" | "visibleChange", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: {
        readonly type: import("vue").PropType<string | number>;
    };
    readonly appendToBody: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly position: {
        readonly type: import("vue").PropType<import("./editable-select-types").Placement[]>;
        readonly default: readonly ["bottom"];
    };
    readonly options: {
        readonly type: import("vue").PropType<import("./editable-select-types").Options>;
        readonly default: () => never[];
    };
    readonly width: {
        readonly type: NumberConstructor;
    };
    readonly maxHeight: {
        readonly type: NumberConstructor;
    };
    readonly size: {
        readonly type: import("vue").PropType<import("./editable-select-types").EditableSelectSize>;
    };
    readonly placeholder: {
        readonly type: StringConstructor;
        readonly default: "Select";
    };
    readonly loading: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly allowClear: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly disabledKey: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly remote: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly filterMethod: {
        readonly type: import("vue").PropType<(inputValue: string) => void>;
    };
    readonly remoteMethod: {
        readonly type: import("vue").PropType<(inputValue: string) => void>;
    };
    readonly enableLazyLoad: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
}>>, {
    readonly position: import("./editable-select-types").Placement[];
    readonly loading: boolean;
    readonly disabled: boolean;
    readonly options: import("./editable-select-types").Options;
    readonly placeholder: string;
    readonly disabledKey: string;
    readonly appendToBody: boolean;
    readonly enableLazyLoad: boolean;
    readonly allowClear: boolean;
    readonly remote: boolean;
}>;
export default _default;
