import type { ComputedRef, ExtractPropTypes, PropType, Ref } from 'vue';
export declare type InputSize = 'sm' | 'md' | 'lg';
export declare const inputProps: {
    readonly modelValue: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly error: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly size: {
        readonly type: PropType<InputSize>;
    };
    readonly validateEvent: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly prefix: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly suffix: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly showPassword: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly clearable: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly placeholder: {
        readonly type: StringConstructor;
        readonly default: "";
    };
};
export declare type InputProps = ExtractPropTypes<typeof inputProps>;
export interface UseInputRender {
    inputDisabled: ComputedRef<boolean>;
    inputSize: ComputedRef<InputSize | ''>;
    isFocus: Ref<boolean>;
    wrapClasses: ComputedRef<Record<string, boolean | undefined>>;
    inputClasses: ComputedRef<Record<string, boolean | undefined>>;
    customStyle: Record<string, unknown>;
    otherAttrs: Record<string, unknown>;
}
export interface UseInputEvent {
    onFocus: (e: FocusEvent) => void;
    onBlur: (e: FocusEvent) => void;
    onInput: (e: Event) => void;
    onChange: (e: Event) => void;
    onKeydown: (e: KeyboardEvent) => void;
    onClear: () => void;
}
export interface UseInputFunction {
    select: () => void;
    blur: () => void;
    focus: () => void;
}
