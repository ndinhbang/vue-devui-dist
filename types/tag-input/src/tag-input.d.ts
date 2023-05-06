import { Suggestion } from './tag-input-types';
import './tag-input.scss';
declare const _default: import("vue").DefineComponent<{
    readonly modelValue: {
        readonly type: import("vue").PropType<Suggestion[]>;
        readonly default: () => [];
    };
    readonly displayProperty: {
        readonly type: StringConstructor;
        readonly default: "name";
    };
    readonly placeholder: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly minLength: {
        readonly type: NumberConstructor;
        readonly default: 3;
    };
    readonly maxLength: {
        readonly type: NumberConstructor;
        readonly default: number;
    };
    readonly maxTags: {
        readonly type: NumberConstructor;
        readonly default: number;
    };
    readonly maxTagsText: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly spellcheck: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly suggestionList: {
        readonly type: import("vue").PropType<Suggestion[]>;
        readonly default: () => [];
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly isAddBySpace: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly disabledText: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly noData: {
        readonly type: StringConstructor;
        readonly default: "暂无数据";
    };
    readonly caseSensitivity: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "change" | "update:modelValue" | "update:suggestionList", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: {
        readonly type: import("vue").PropType<Suggestion[]>;
        readonly default: () => [];
    };
    readonly displayProperty: {
        readonly type: StringConstructor;
        readonly default: "name";
    };
    readonly placeholder: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly minLength: {
        readonly type: NumberConstructor;
        readonly default: 3;
    };
    readonly maxLength: {
        readonly type: NumberConstructor;
        readonly default: number;
    };
    readonly maxTags: {
        readonly type: NumberConstructor;
        readonly default: number;
    };
    readonly maxTagsText: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly spellcheck: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly suggestionList: {
        readonly type: import("vue").PropType<Suggestion[]>;
        readonly default: () => [];
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly isAddBySpace: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly disabledText: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly noData: {
        readonly type: StringConstructor;
        readonly default: "暂无数据";
    };
    readonly caseSensitivity: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
}>>, {
    readonly spellcheck: boolean;
    readonly disabled: boolean;
    readonly placeholder: string;
    readonly noData: string;
    readonly modelValue: Suggestion[];
    readonly maxLength: number;
    readonly displayProperty: string;
    readonly minLength: number;
    readonly maxTags: number;
    readonly maxTagsText: string;
    readonly suggestionList: Suggestion[];
    readonly isAddBySpace: boolean;
    readonly disabledText: string;
    readonly caseSensitivity: boolean;
}>;
export default _default;
