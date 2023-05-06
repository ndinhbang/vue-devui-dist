import type { PropType, ExtractPropTypes, InjectionKey, Ref, ComputedRef } from 'vue';
export interface Option {
    label: string;
    value: string | number;
    disabled?: boolean;
    [key: string]: unknown;
}
export declare type Options = Array<Option>;
export declare type Placement = 'top' | 'right' | 'bottom' | 'left' | 'top-start' | 'top-end' | 'right-start' | 'right-end' | 'bottom-start' | 'bottom-end' | 'left-start' | 'left-end';
export declare type EditableSelectSize = 'sm' | 'lg';
export declare const editableSelectProps: {
    readonly modelValue: {
        readonly type: PropType<string | number>;
    };
    readonly appendToBody: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly position: {
        readonly type: PropType<Placement[]>;
        readonly default: readonly ["bottom"];
    };
    readonly options: {
        readonly type: PropType<Options>;
        readonly default: () => never[];
    };
    readonly width: {
        readonly type: NumberConstructor;
    };
    readonly maxHeight: {
        readonly type: NumberConstructor;
    };
    readonly size: {
        readonly type: PropType<EditableSelectSize>;
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
        readonly type: PropType<(inputValue: string) => void>;
    };
    readonly remoteMethod: {
        readonly type: PropType<(inputValue: string) => void>;
    };
    readonly enableLazyLoad: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
};
export declare type EditableSelectProps = ExtractPropTypes<typeof editableSelectProps>;
export interface EditableSelectContext {
    dropdownRef: Ref<HTMLElement | undefined>;
    query: Ref<string>;
    inputValue: Ref<string>;
    hoveringIndex: Ref<number>;
    loading: Ref<boolean>;
    modelValue: Ref<string | number | undefined> | undefined;
    emptyText: ComputedRef<string>;
    disabledKey: string;
    loadMore: () => void;
    handleOptionSelect: (option: Option, byClick: boolean) => void;
    setSoftFocus: () => void;
}
export declare const SELECT_KEY: InjectionKey<EditableSelectContext>;
