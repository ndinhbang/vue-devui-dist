import type { ComputedRef, ExtractPropTypes, PropType, InjectionKey, Ref } from 'vue';
export declare type IButtonVariant = 'solid' | 'outline' | 'text';
export declare type IButtonColor = 'secondary' | 'primary' | 'danger';
export declare type IButtonSize = 'lg' | 'md' | 'sm';
export declare type IButtonShape = 'round' | 'circle';
export declare const buttonProps: {
    readonly variant: {
        readonly type: PropType<IButtonVariant>;
        readonly default: "outline";
    };
    readonly size: {
        readonly type: PropType<IButtonSize>;
        readonly default: "md";
    };
    readonly color: {
        readonly type: PropType<IButtonColor>;
    };
    readonly icon: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly loading: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly shape: {
        readonly type: PropType<IButtonShape>;
    };
};
export declare const buttonGroupProps: {
    readonly size: {
        readonly type: PropType<IButtonSize>;
        readonly default: "md";
    };
};
export declare type ButtonProps = ExtractPropTypes<typeof buttonProps>;
export declare type ButtonGroupProps = ExtractPropTypes<typeof buttonGroupProps>;
export interface UseButtonReturnType {
    classes: ComputedRef<{
        [key: string]: string | boolean;
    }>;
    iconClass: ComputedRef<string>;
}
interface ButtonGroupInjection {
    size: Ref<IButtonSize>;
}
export declare const buttonGroupInjectionKey: InjectionKey<ButtonGroupInjection>;
export {};
