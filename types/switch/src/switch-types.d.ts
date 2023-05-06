import type { ExtractPropTypes, PropType, ComputedRef } from 'vue';
export declare type SwitchSize = 'sm' | 'md' | 'lg';
export declare const switchProps: {
    readonly modelValue: {
        readonly type: PropType<string | number | boolean>;
        readonly default: false;
    };
    readonly size: {
        readonly type: PropType<SwitchSize>;
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: undefined;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly beforeChange: {
        readonly type: PropType<(v: boolean) => boolean | Promise<boolean>>;
        readonly default: undefined;
    };
    readonly change: {
        readonly type: PropType<(v: boolean) => void>;
        readonly default: undefined;
    };
    readonly activeValue: {
        readonly type: PropType<string | number | boolean>;
        readonly default: true;
    };
    readonly inactiveValue: {
        readonly type: PropType<string | number | boolean>;
        readonly default: false;
    };
};
export declare type SwitchProps = ExtractPropTypes<typeof switchProps>;
export declare type UseSwitchFn = {
    checked: ComputedRef<string | number | boolean>;
    switchDisabled: ComputedRef<boolean>;
    switchSize: ComputedRef<SwitchSize>;
    toggle: () => void;
};
