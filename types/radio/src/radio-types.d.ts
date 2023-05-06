import type { InjectionKey, PropType, Ref, ExtractPropTypes, ComputedRef } from 'vue';
export declare type valueTypes = string | number | boolean;
export declare type sizeTypes = 'lg' | 'md' | 'sm';
/** radio 的 props */
export declare const radioProps: {
    /** 单选框的值 */
    readonly value: {
        readonly type: PropType<valueTypes>;
        readonly required: true;
        readonly default: null;
    };
    readonly border: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly modelValue: {
        type: PropType<valueTypes>;
        default: null;
    };
    readonly name: {
        type: PropType<string | undefined>;
        default: null;
    };
    readonly beforeChange: {
        type: PropType<(value: valueTypes) => boolean | Promise<boolean>>;
        default: null;
    };
    readonly disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly size: {
        type: PropType<sizeTypes>;
    };
};
/** radio-group 的 props */
export declare const radioGroupProps: {
    /** 选项列表 */
    readonly values: {
        readonly type: PropType<(string | number)[] | null>;
        readonly default: null;
    };
    /** 展示方式，横向/竖向 */
    readonly direction: {
        readonly type: PropType<"column" | "row">;
        readonly default: "column";
    };
    readonly border: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly fill: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly textColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly modelValue: {
        type: PropType<valueTypes>;
        default: null;
    };
    readonly name: {
        type: PropType<string | undefined>;
        default: null;
    };
    readonly beforeChange: {
        type: PropType<(value: valueTypes) => boolean | Promise<boolean>>;
        default: null;
    };
    readonly disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly size: {
        type: PropType<sizeTypes>;
    };
};
export declare type RadioProps = ExtractPropTypes<typeof radioProps>;
export declare type RadioGroupProps = ExtractPropTypes<typeof radioGroupProps>;
/** radio-group 注入字段的接口 */
interface RadioGroupInjection {
    modelValue: Ref<string | number | boolean>;
    name: Ref<string | undefined>;
    disabled: Ref<boolean>;
    beforeChange: (value: valueTypes) => boolean | Promise<boolean>;
    emitChange: (value: valueTypes) => void;
    border: Ref<boolean>;
    size: Ref<string>;
    fill: Ref<string | undefined>;
    textColor: Ref<string | undefined>;
}
/** radio-group 注入 radio 的 key 值 */
export declare const radioGroupInjectionKey: InjectionKey<RadioGroupInjection>;
export declare type UseRadioFn = {
    isChecked: ComputedRef<boolean>;
    radioName: ComputedRef<string | undefined>;
    isDisabled: ComputedRef<boolean | undefined>;
    handleChange: (event: Event) => Promise<void>;
    border: ComputedRef<boolean>;
    size: ComputedRef<string>;
};
export declare type UseRadioButtonFn = {
    mergedColor: ComputedRef<string | undefined>;
    mergedTextColor: ComputedRef<string | undefined>;
};
export {};
