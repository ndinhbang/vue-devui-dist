import { PropType, InjectionKey, Ref, ExtractPropTypes, ComputedRef } from 'vue';
declare type Direction = 'row' | 'column';
declare type Size = 'lg' | 'md' | 'sm';
export declare const checkboxProps: {
    readonly checked: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly value: {
        readonly type: PropType<string | number>;
    };
    readonly label: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly 'onUpdate:checked': {
        readonly type: PropType<(v: boolean) => void>;
        readonly default: undefined;
    };
    readonly onChange: {
        readonly type: PropType<(v: boolean) => void>;
        readonly default: undefined;
    };
    readonly modelValue: {
        readonly type: BooleanConstructor;
    };
    readonly 'onUpdate:modelValue': {
        readonly type: PropType<(v: boolean) => void>;
    };
    readonly border: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly name: {
        readonly type: StringConstructor;
        readonly default: undefined;
    };
    readonly halfChecked: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly isShowTitle: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly title: {
        readonly type: StringConstructor;
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: undefined;
    };
    readonly showAnimation: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly beforeChange: {
        readonly type: PropType<(isChecked: boolean, v: string | undefined) => boolean | Promise<boolean>>;
        readonly default: undefined;
    };
    readonly size: {
        readonly type: PropType<Size>;
    };
};
export declare type CheckboxProps = ExtractPropTypes<typeof checkboxProps>;
export declare const checkboxGroupProps: {
    readonly modelValue: {
        readonly type: PropType<(string | number)[]>;
        readonly required: true;
    };
    readonly direction: {
        readonly type: PropType<Direction>;
        readonly default: "column";
    };
    readonly itemWidth: {
        readonly type: NumberConstructor;
        readonly default: undefined;
    };
    readonly options: {
        readonly type: PropType<({
            value: string;
        } & Partial<CheckboxProps>)[]>;
        readonly default: () => never[];
    };
    readonly onChange: {
        readonly type: PropType<(v: string[]) => void>;
        readonly default: undefined;
    };
    readonly 'onUpdate:modelValue': {
        readonly type: PropType<(v: string[]) => void>;
        readonly default: undefined;
    };
    readonly border: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly max: {
        readonly type: NumberConstructor;
        readonly default: undefined;
    };
    readonly textColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly name: {
        readonly type: StringConstructor;
        readonly default: undefined;
    };
    readonly halfChecked: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly isShowTitle: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly title: {
        readonly type: StringConstructor;
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: undefined;
    };
    readonly showAnimation: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly beforeChange: {
        readonly type: PropType<(isChecked: boolean, v: string | undefined) => boolean | Promise<boolean>>;
        readonly default: undefined;
    };
    readonly size: {
        readonly type: PropType<Size>;
    };
};
export declare type CheckboxGroupProps = ExtractPropTypes<typeof checkboxGroupProps>;
interface checkboxGroupInjection {
    disabled: Ref<boolean>;
    isShowTitle: Ref<boolean>;
    color: Ref<string | undefined>;
    showAnimation: Ref<boolean>;
    beforeChange: undefined | ((isChecked: boolean, v: string | undefined) => boolean | Promise<boolean>);
    toggleGroupVal: (v: string | number | undefined) => void;
    isItemChecked: (v: string | number | undefined) => boolean | undefined;
    itemWidth: Ref<number | undefined>;
    direction: Ref<Direction>;
    size: Ref<string>;
    border: Ref<boolean>;
    max: Ref<number | undefined>;
    modelValue: Ref<(string | number)[]>;
    textColor: Ref<string>;
}
export declare const checkboxGroupInjectionKey: InjectionKey<checkboxGroupInjection>;
export declare type UseCheckboxFn = {
    mergedChecked: ComputedRef<boolean>;
    mergedDisabled: ComputedRef<boolean>;
    mergedIsShowTitle: ComputedRef<boolean | undefined>;
    mergedShowAnimation: ComputedRef<boolean>;
    mergedColor: ComputedRef<string | undefined>;
    itemWidth: number | undefined;
    direction: string | undefined;
    size: ComputedRef<string>;
    border: ComputedRef<boolean>;
    handleClick: (event: Event) => void;
};
export interface GroupDefaultOpt {
    checked: boolean;
    isShowTitle: boolean;
    halfChecked: boolean;
    showAnimation: boolean;
    disabled: boolean;
}
export declare type UseCheckboxGroupFn = {
    defaultOpt: GroupDefaultOpt;
};
export declare type UseCheckboxButtonFn = {
    mergedTextColor: ComputedRef<string | undefined>;
};
export {};
