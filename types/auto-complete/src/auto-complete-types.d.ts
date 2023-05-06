import type { PropType, ExtractPropTypes, InjectionKey, SetupContext, Ref, ComputedRef } from 'vue';
export interface SourceItemObj {
    label: string;
    disabled: boolean;
    [propName: string]: unknown;
}
export declare type Placement = 'top' | 'right' | 'bottom' | 'left' | 'top-start' | 'top-end' | 'right-start' | 'right-end' | 'bottom-start' | 'bottom-end' | 'left-start' | 'left-end';
export declare type AutoCompleteSize = 'sm' | 'md' | 'lg';
export declare type SourceType = Array<string> | Array<SourceItemObj>;
export declare const autoCompleteProps: {
    readonly modelValue: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly source: {
        readonly type: PropType<SourceType>;
        readonly default: null;
    };
    readonly allowEmptyValueSearch: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly appendToBody: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly position: {
        readonly type: PropType<Placement[]>;
        readonly default: readonly ["bottom-end"];
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly delay: {
        readonly type: NumberConstructor;
        readonly default: 300;
    };
    readonly disabledKey: {
        readonly type: StringConstructor;
        readonly default: null;
    };
    readonly formatter: {
        readonly type: PropType<(item: string | SourceItemObj) => string>;
        readonly default: (item: string | SourceItemObj) => string;
    };
    readonly isSearching: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly sceneType: {
        readonly type: StringConstructor;
        readonly default: null;
    };
    readonly searchFn: {
        readonly type: PropType<(term: string) => SourceType>;
        readonly default: null;
    };
    readonly tipsText: {
        readonly type: StringConstructor;
        readonly default: "最近输入";
    };
    readonly latestSource: {
        readonly type: ArrayConstructor;
        readonly default: null;
    };
    readonly valueParser: {
        readonly type: PropType<(item: string | SourceItemObj) => string>;
        readonly default: (item: string | SourceItemObj) => string | SourceItemObj;
    };
    readonly enableLazyLoad: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly width: {
        readonly type: NumberConstructor;
        readonly default: 400;
    };
    readonly showAnimation: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly maxHeight: {
        readonly type: NumberConstructor;
        readonly default: 300;
    };
    readonly transInputFocusEmit: {
        readonly type: PropType<() => void>;
        readonly default: null;
    };
    readonly selectValue: {
        readonly type: PropType<(val: string) => string>;
        readonly default: null;
    };
    readonly loadMore: {
        readonly type: PropType<() => void>;
        readonly default: null;
    };
    readonly placeholder: {
        readonly type: StringConstructor;
        readonly default: "Search";
    };
    readonly prefix: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly suffix: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly size: {
        readonly type: PropType<AutoCompleteSize>;
        readonly default: "md";
    };
    readonly clearable: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
};
export declare type AutoCompleteProps = ExtractPropTypes<typeof autoCompleteProps>;
export interface AutoCompleteRootType {
    ctx: SetupContext;
    props: AutoCompleteProps;
}
export interface UseAutoCompleteRender {
    autoCompleteTopClasses: ComputedRef<Record<string, boolean | undefined>>;
    inputClasses: ComputedRef<Record<string, boolean | undefined>>;
    inputWrapperClasses: ComputedRef<Record<string, boolean | undefined>>;
    inputInnerClasses: ComputedRef<Record<string, boolean | undefined>>;
}
export interface UseInputHandle {
    handleClose: () => void;
    toggleMenu: () => void;
    onInput: (e: Event) => void;
    onFocus: () => void;
    onBlur: () => void;
    onClear: () => void;
    inputRef: Ref;
    isFocus: Ref<boolean>;
    visible: Ref<boolean>;
    searchStatus: Ref<boolean>;
}
export declare type SearchFnType = (term: string) => SourceType;
export declare type FormatterType = (item: string | SourceItemObj) => string;
export declare type DefaultFuncType = () => void;
export declare type HandleSearch = (term: string, enableLazyLoad?: boolean) => void;
export declare type RecentlyFocus = (latestSource: Array<SourceItemObj>) => void;
export declare type InputDebounceCb = (value: string) => void;
export declare type TransInputFocusEmit = () => unknown;
export declare type SelectOptionClick = (item: string | SourceItemObj) => void;
export declare type SelectValueType = (value: string) => unknown;
export declare type DropdownProps = {
    props: AutoCompleteProps;
    searchList: Ref<SourceType>;
    searchStatus?: Ref<boolean>;
    showNoResultItemTemplate: Ref<boolean>;
    term?: string;
    visible: Ref<boolean>;
    selectedIndex: Ref<number>;
    selectOptionClick: SelectOptionClick;
    dropDownRef: Ref;
    showLoading: Ref<boolean>;
    loadMore: () => void;
    latestSource: Ref;
    modelValue: Ref<string>;
    hoverIndex: Ref<number>;
    valueParser: Ref;
    isDisabled: ComputedRef<boolean>;
};
export declare const DropdownPropsKey: InjectionKey<DropdownProps>;
