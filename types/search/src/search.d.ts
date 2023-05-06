import './search.scss';
declare const _default: import("vue").DefineComponent<{
    readonly size: {
        readonly type: import("vue").PropType<import("./search-types").Size>;
    };
    readonly placeholder: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly maxLength: {
        readonly type: NumberConstructor;
        readonly default: number;
    };
    readonly delay: {
        readonly type: NumberConstructor;
        readonly default: 300;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly autoFocus: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly isKeyupSearch: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly iconPosition: {
        readonly type: import("vue").PropType<import("./search-types").IconPosition>;
        readonly default: "right";
    };
    readonly noBorder: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly cssClass: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly modelValue: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly 'onUpdate:modelValue': {
        readonly type: import("vue").PropType<(v: string) => void>;
        readonly default: undefined;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("search" | "update:modelValue")[], "search" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly size: {
        readonly type: import("vue").PropType<import("./search-types").Size>;
    };
    readonly placeholder: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly maxLength: {
        readonly type: NumberConstructor;
        readonly default: number;
    };
    readonly delay: {
        readonly type: NumberConstructor;
        readonly default: 300;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly autoFocus: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly isKeyupSearch: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly iconPosition: {
        readonly type: import("vue").PropType<import("./search-types").IconPosition>;
        readonly default: "right";
    };
    readonly noBorder: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly cssClass: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly modelValue: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly 'onUpdate:modelValue': {
        readonly type: import("vue").PropType<(v: string) => void>;
        readonly default: undefined;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onSearch?: ((...args: any[]) => any) | undefined;
}, {
    readonly disabled: boolean;
    readonly placeholder: string;
    readonly autoFocus: boolean;
    readonly cssClass: string;
    readonly modelValue: string;
    readonly delay: number;
    readonly 'onUpdate:modelValue': (v: string) => void;
    readonly maxLength: number;
    readonly isKeyupSearch: boolean;
    readonly iconPosition: import("./search-types").IconPosition;
    readonly noBorder: boolean;
}>;
export default _default;
