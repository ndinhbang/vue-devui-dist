import { PropType, ComputedRef, ExtractPropTypes, Ref } from 'vue';
export interface OptionObjectItem {
    name: string;
    value: string | number;
    _checked: boolean;
    [key: string]: unknown;
}
export declare type OptionItem = number | string | ({
    value: string | number;
} & Partial<OptionObjectItem>);
export declare type Options = Array<OptionItem>;
export declare type ModelValue = number | string | Array<number | string>;
export declare type filterValue = boolean | ((query: string) => void);
export declare type SelectSize = 'sm' | 'md' | 'lg';
export declare const selectProps: {
    readonly modelValue: {
        readonly type: PropType<ModelValue>;
        readonly default: "";
    };
    readonly 'onUpdate:modelValue': {
        readonly type: PropType<(val: ModelValue) => void>;
        readonly default: undefined;
    };
    readonly options: {
        readonly type: PropType<Options>;
        readonly default: () => never[];
    };
    readonly size: {
        readonly type: PropType<SelectSize>;
        readonly default: "";
    };
    readonly overview: {
        readonly type: PropType<"border" | "underlined">;
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
        readonly type: PropType<filterValue>;
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
        readonly type: PropType<(bool: boolean) => void>;
        readonly default: undefined;
    };
    readonly onValueChange: {
        readonly type: PropType<(item: OptionItem, index: number) => void>;
        readonly default: undefined;
    };
    readonly multipleLimit: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
};
export declare type SelectProps = ExtractPropTypes<typeof selectProps>;
export declare type OptionModelValue = number | string;
export interface UseSelectReturnType {
    selectDisabled: ComputedRef<boolean>;
    selectSize: ComputedRef<SelectSize>;
    originRef: Ref<HTMLElement | undefined>;
    dropdownRef: Ref<HTMLElement | undefined>;
    isOpen: Ref<boolean>;
    selectCls: ComputedRef<string>;
    mergeOptions: Ref<OptionObjectItem[]>;
    selectedOptions: ComputedRef<OptionObjectItem[]>;
    filterQuery: Ref<string>;
    emptyText: ComputedRef<string>;
    isLoading: Ref<boolean>;
    isShowEmptyText: ComputedRef<boolean>;
    handleClear: (e: MouseEvent) => void;
    valueChange: (item: OptionObjectItem) => void;
    handleClose: () => void;
    updateInjectOptions: (item: Record<string, unknown>, operation: string, isObject: boolean) => void;
    tagDelete: (data: OptionObjectItem) => void;
    onFocus: (e: FocusEvent) => void;
    onBlur: (e: FocusEvent) => void;
    isDisabled: (item: OptionObjectItem) => boolean;
    toggleChange: (bool: boolean) => void;
    debounceQueryFilter: (query: string) => void;
    isShowCreateOption: ComputedRef<boolean>;
}
export interface SelectContext extends SelectProps {
    selectDisabled: boolean;
    selectSize: string;
    isOpen: boolean;
    selectedOptions: OptionObjectItem[];
    filterQuery: string;
    valueChange: (item: OptionObjectItem) => void;
    handleClear: () => void;
    updateInjectOptions: (item: Record<string, unknown>, operation: string, isObject: boolean) => void;
    tagDelete: (data: OptionObjectItem) => void;
    onFocus: (e: FocusEvent) => void;
    onBlur: (e: FocusEvent) => void;
    debounceQueryFilter: (query: string) => void;
}
export declare const optionProps: {
    value: {
        type: PropType<OptionModelValue>;
        default: string;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    create: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare type OptionProps = ExtractPropTypes<typeof optionProps>;
export interface UseOptionReturnType {
    currentName: ComputedRef<OptionModelValue>;
    selectOptionCls: ComputedRef<string>;
    isVisible: ComputedRef<boolean>;
    optionSelect: () => void;
}
export interface UseSelectContentReturnType {
    searchQuery: Ref<string>;
    selectedData: ComputedRef<OptionObjectItem[]>;
    isSelectDisable: ComputedRef<boolean>;
    isSupportCollapseTags: ComputedRef<boolean>;
    isDisabledTooltip: ComputedRef<boolean>;
    isReadOnly: ComputedRef<boolean>;
    selectionCls: ComputedRef<string>;
    inputCls: ComputedRef<string>;
    tagSize: ComputedRef<string>;
    placeholder: ComputedRef<string>;
    isMultiple: ComputedRef<boolean>;
    displayInputValue: ComputedRef<string>;
    handleClear: (e: MouseEvent) => void;
    tagDelete: (data: OptionObjectItem) => void;
    onFocus: (e: FocusEvent) => void;
    onBlur: (e: FocusEvent) => void;
    queryFilter: (e: Event) => void;
}
export interface UseSelectFunctionReturn {
    isSelectFocus: Ref<boolean>;
    blur: () => void;
    focus: () => void;
}
export declare const optionGroupProps: {
    label: {
        type: StringConstructor;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare type OptionGroupProps = ExtractPropTypes<typeof optionGroupProps>;
export declare type OptionGroupContext = OptionGroupProps;
