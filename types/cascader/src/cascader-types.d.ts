import type { PropType, ExtractPropTypes, Ref, UnwrapNestedRefs, ComputedRef, UnwrapRef } from 'vue';
declare type TriggerTypes = 'hover' | 'click';
export interface CascaderItem {
    label: string;
    value: number | string;
    isLeaf?: boolean;
    children?: CascaderItem[];
    checked?: boolean;
    halfChecked?: boolean;
    disabled?: boolean;
    active?: boolean;
    _loading?: boolean;
    icon?: string;
    [prop: string]: unknown;
}
export declare type CascaderModelValue = (string | number)[];
export declare type InputSize = 'sm' | 'md' | 'lg';
export declare type CascaderValueType = CascaderModelValue | [CascaderModelValue];
export declare const cascaderProps: {
    /**
     * 可选，指定展开次级菜单方式
     * @description 可选择的值 'hover', 'click'
     * @type {('hover'|'click')}
     * @default 'hover'
     */
    readonly trigger: {
        readonly type: PropType<TriggerTypes>;
        readonly default: "hover";
    };
    /**
     * 可选，单位 px，用于控制组件输入框宽度和下拉的宽度
     * @type { Number | String }
     * @default 200
     */
    readonly width: {
        readonly type: readonly [NumberConstructor, StringConstructor];
        readonly default: 200;
    };
    /**
     * 可选，单位 px，控制下拉列表的宽度，默认和组件输入框 width 相等
     * @type { Number | String }
     * @default 200
     */
    readonly dropdownWidth: {
        readonly type: readonly [NumberConstructor, StringConstructor];
        readonly default: 200;
    };
    /**
     * 必选，级联器的菜单信息
     * @type {CascaderItem[]}
     * @default []
     */
    readonly options: {
        readonly type: PropType<CascaderItem[]>;
        readonly default: readonly [];
        readonly required: true;
    };
    /**
     * 可选，级联器是否开启多选模式，开启后为 checkbox 选择
     * @type {Boolean}
     * @default false
     */
    readonly multiple: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    /**
     * 可选，级联器选中项是否显示路径，仅单选模式下生效
     */
    readonly showPath: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    /**
     * 可选，需要选中项的value集合
     * @type {CascaderValueType}
     * @default []
     */
    readonly modelValue: {
        readonly type: PropType<CascaderValueType>;
        readonly default: readonly [];
    };
    readonly 'onUpdate:modelValue': {
        readonly type: PropType<(v: boolean) => void>;
    };
    /**
     * 可选，级联器是否禁用
     * @type {boolean}
     * @default false
     */
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    /**
     * 可选，没有选择时的输入框展示信息
     * @type {string}
     * @default '''
     */
    readonly placeholder: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly change: {
        readonly type: PropType<(v: CascaderValueType, k: CascaderItem[]) => void>;
        readonly default: undefined;
    };
    readonly clearable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly filterable: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly debounce: {
        readonly type: NumberConstructor;
        readonly default: 300;
    };
    readonly beforeFilter: {
        readonly type: PropType<(value: string) => boolean | Promise<unknown>>;
        readonly default: () => boolean;
    };
    readonly size: {
        readonly type: PropType<InputSize>;
    };
};
export declare type CascaderProps = ExtractPropTypes<typeof cascaderProps>;
export interface PopupTypes {
    menuShow: Ref<boolean>;
    menuOpenClass: Ref<string>;
    stopDefault: Ref<boolean>;
    openPopup: (e?: MouseEvent) => void;
    updateStopDefaultType: () => void;
}
export declare type CaascaderOptionsType = UnwrapNestedRefs<[CascaderItem[]]>;
export interface OptionsCallback {
    cascaderOptions: never | CaascaderOptionsType;
    changeCascaderIndexs: (optionItem: CascaderItem, ulIndex: number) => void;
}
export interface CascaderItemNeedType {
    valueCache?: CascaderValueType;
    trigger?: TriggerTypes;
    value?: CascaderValueType;
    inputValueCache?: Ref<string>;
    confirmInputValueFlg?: Ref<boolean>;
    multiple?: boolean;
    stopDefault?: Ref<boolean>;
    activeIndexs?: number[];
    tagList?: UnwrapNestedRefs<CascaderItem[]>;
}
export interface UseCascaderItemCallback {
    cascaderItemNeedProps: CascaderItemNeedType;
}
export declare type CheckedType = 'checked' | 'halfChecked';
export interface RootStyleFeedback {
    inputWidth: string;
}
export declare const cascaderulProps: {
    /**
     * 每个ul中的li
     * @type {CascaderItem[]}
     * @default []
     */
    cascaderItems: {
        type: PropType<CascaderItem[]>;
        default: () => CascaderItem[];
    };
    /**
     * 可选，单位 px，控制下拉列表的宽度，默认和组件输入框 width 相等
     * @type { Number | String }
     * @default 200
     */
    dropdownWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    /**
     * 当前选中的ul下标
     * @type {Number}
     * @default 0
     */
    ulIndex: {
        type: NumberConstructor;
        default: number;
    };
    cascaderItemNeedProps: {
        type: PropType<CascaderItemNeedType>;
        default: () => CascaderItemNeedType;
    };
    stopDefault: {
        type: BooleanConstructor;
        default: boolean;
    };
    cascaderOptions: {
        type: PropType<[CascaderItem[]]>;
        default: () => [CascaderItem[]];
    };
};
export declare type CascaderulProps = ExtractPropTypes<typeof cascaderulProps>;
export interface CascaderItemPropsType extends CascaderulProps {
    cascaderItem: CascaderItem;
    liIndex: number;
    cascaderItemNeedProps: CascaderItemNeedType;
}
export interface DropdownStyleFeedback {
    dropdownWidth: string;
}
export interface MultiplePropsType {
    activeOptions: CascaderItem[];
    placeholder: string;
}
export interface UpdateStatusCallback {
    updateStatus: (node: CascaderItem, options: CaascaderOptionsType, ulIndex: number) => void;
}
export interface suggestionListType {
    values: CascaderModelValue;
    labels: string[];
    labelsString?: string;
    disabled?: boolean;
}
export declare type UseFilterFn = {
    handleInput: (val: string) => void;
    suggestionsList: Ref<suggestionListType[]>;
    isSearching: Ref<boolean>;
    chooseSuggestion: (item: suggestionListType) => void;
};
export declare type UseCascaderFn = {
    origin: Ref<HTMLElement | undefined>;
    overlayRef: Ref<HTMLElement | undefined>;
    menuShow: Ref<boolean>;
    cascaderItemNeedProps: CascaderItemNeedType;
    rootClasses: ComputedRef<string>;
    menuOpenClass: Ref<string>;
    inputValue: Ref<string>;
    openPopup: () => void;
    rootStyle: RootStyleFeedback;
    showClearable: Ref<boolean>;
    position: Ref<string[]>;
    cascaderOptions: UnwrapRef<[CascaderItem[]]>;
    tagList: Ref<CascaderItem[]>;
    showClear: () => void;
    hideClear: () => void;
    clearData: (e: MouseEvent) => void;
    handleInput: (val: string) => void;
    multiple: Ref<boolean>;
    suggestionsList: Ref<suggestionListType[]>;
    isSearching: Ref<boolean>;
    chooseSuggestion: (item: suggestionListType) => void;
    onFocus: (e: FocusEvent) => void;
    onBlur: (e: FocusEvent) => void;
};
export {};
