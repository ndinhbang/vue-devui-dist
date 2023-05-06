import type { ExtractPropTypes, PropType } from 'vue';
export interface Suggestion {
    __index?: number;
    [x: string]: unknown;
}
export declare const tagInputProps: {
    readonly modelValue: {
        readonly type: PropType<Suggestion[]>;
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
        readonly type: PropType<Suggestion[]>;
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
};
export declare type TagInputProps = ExtractPropTypes<typeof tagInputProps>;
export declare type HandleEnter = () => void;
export declare type OnSelectIndexChange = (isUp: boolean) => void;
export interface UseInputKeydownReturnTypes {
    onInputKeydown: (e: KeyboardEvent) => void;
}
