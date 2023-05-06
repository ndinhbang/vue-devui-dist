import type { PropType, ExtractPropTypes, Ref, ComputedRef } from 'vue';
export declare type Size = 'lg' | 'md' | 'sm';
export declare type IconPosition = 'right' | 'left';
export declare const searchProps: {
    readonly size: {
        readonly type: PropType<Size>;
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
        readonly type: PropType<IconPosition>;
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
        readonly type: PropType<(v: string) => void>;
        readonly default: undefined;
    };
};
export declare type SearchProps = ExtractPropTypes<typeof searchProps>;
export interface UseSearchClassTypes {
    rootClass: ComputedRef<{
        [p: string]: string | boolean;
    }>;
    searchSize: ComputedRef<Size>;
}
export interface KeywordsReturnTypes {
    keywords: Ref<string>;
    clearIconShow: ComputedRef<boolean>;
    onClearHandle: () => void;
}
export interface KeydownReturnTypes {
    onInputKeydown: (e: KeyboardEvent) => void;
    onClickHandle: () => void;
    useEmitKeyword: (e: string) => void;
}
