import './select.scss';
declare const _default: import("vue").DefineComponent<{
    readonly modelValue: {
        readonly type: import("vue").PropType<import("./select-types").ModelValue>;
        readonly default: "";
    };
    readonly 'onUpdate:modelValue': {
        readonly type: import("vue").PropType<(val: import("./select-types").ModelValue) => void>;
        readonly default: undefined;
    };
    readonly options: {
        readonly type: import("vue").PropType<import("./select-types").Options>;
        readonly default: () => never[];
    };
    readonly size: {
        readonly type: import("vue").PropType<import("./select-types").SelectSize>;
        readonly default: "";
    };
    readonly overview: {
        readonly type: import("vue").PropType<"border" | "underlined">;
        readonly default: "border";
    };
    readonly placeholder: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly multiple: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly allowClear: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly optionDisabledKey: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly collapseTags: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly collapseTagsTooltip: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly filter: {
        readonly type: import("vue").PropType<import("./select-types").filterValue>;
        readonly default: false;
    };
    readonly remote: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly allowCreate: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly noDataText: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly noMatchText: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly loading: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly loadingText: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly onToggleChange: {
        readonly type: import("vue").PropType<(bool: boolean) => void>;
        readonly default: undefined;
    };
    readonly onValueChange: {
        readonly type: import("vue").PropType<(item: import("./select-types").OptionItem, index: number) => void>;
        readonly default: undefined;
    };
    readonly multipleLimit: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "clear" | "blur" | "focus" | "update:modelValue" | "toggle-change" | "value-change" | "remove-tag", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: {
        readonly type: import("vue").PropType<import("./select-types").ModelValue>;
        readonly default: "";
    };
    readonly 'onUpdate:modelValue': {
        readonly type: import("vue").PropType<(val: import("./select-types").ModelValue) => void>;
        readonly default: undefined;
    };
    readonly options: {
        readonly type: import("vue").PropType<import("./select-types").Options>;
        readonly default: () => never[];
    };
    readonly size: {
        readonly type: import("vue").PropType<import("./select-types").SelectSize>;
        readonly default: "";
    };
    readonly overview: {
        readonly type: import("vue").PropType<"border" | "underlined">;
        readonly default: "border";
    };
    readonly placeholder: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly multiple: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly allowClear: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly optionDisabledKey: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly collapseTags: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly collapseTagsTooltip: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly filter: {
        readonly type: import("vue").PropType<import("./select-types").filterValue>;
        readonly default: false;
    };
    readonly remote: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly allowCreate: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly noDataText: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly noMatchText: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly loading: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly loadingText: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly onToggleChange: {
        readonly type: import("vue").PropType<(bool: boolean) => void>;
        readonly default: undefined;
    };
    readonly onValueChange: {
        readonly type: import("vue").PropType<(item: import("./select-types").OptionItem, index: number) => void>;
        readonly default: undefined;
    };
    readonly multipleLimit: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
}>>, {
    readonly filter: import("./select-types").filterValue;
    readonly loading: boolean;
    readonly disabled: boolean;
    readonly multiple: boolean;
    readonly options: import("./select-types").Options;
    readonly size: import("./select-types").SelectSize;
    readonly placeholder: string;
    readonly modelValue: import("./select-types").ModelValue;
    readonly 'onUpdate:modelValue': (val: import("./select-types").ModelValue) => void;
    readonly onToggleChange: (bool: boolean) => void;
    readonly allowClear: boolean;
    readonly remote: boolean;
    readonly overview: "border" | "underlined";
    readonly optionDisabledKey: string;
    readonly collapseTags: boolean;
    readonly collapseTagsTooltip: boolean;
    readonly allowCreate: boolean;
    readonly noDataText: string;
    readonly noMatchText: string;
    readonly loadingText: string;
    readonly onValueChange: (item: import("./select-types").OptionItem, index: number) => void;
    readonly multipleLimit: number;
}>;
export default _default;
