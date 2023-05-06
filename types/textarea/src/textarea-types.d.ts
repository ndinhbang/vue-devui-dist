import type { PropType, ExtractPropTypes, Ref, ComputedRef, StyleValue } from 'vue';
export declare type Resize = 'none' | 'vertical' | 'horizontal' | 'both' | 'inherit';
export declare type TextareaAutoSize = {
    minRows?: number;
    maxRows?: number;
} | boolean;
export declare const textareaProps: {
    readonly autofocus: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly showCount: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly placeholder: {
        readonly type: StringConstructor;
        readonly default: undefined;
    };
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
    readonly resize: {
        readonly type: PropType<Resize>;
        readonly default: "none";
    };
    readonly autosize: {
        readonly type: PropType<TextareaAutoSize>;
        readonly default: false;
    };
    readonly validateEvent: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
};
export declare type TextareaProps = ExtractPropTypes<typeof textareaProps>;
export interface UseTextareaEvent {
    onFocus: (e: FocusEvent) => void;
    onBlur: (e: FocusEvent) => void;
    onInput: (e: Event) => void;
    onChange: (e: Event) => void;
    onKeydown: (e: KeyboardEvent) => void;
}
export interface UseTextareaRender {
    isFocus: Ref<boolean>;
    textareaDisabled: ComputedRef<boolean>;
    wrapClasses: ComputedRef<Record<string, boolean>>;
}
export interface UseTextareaAutosize {
    textareaStyle: ComputedRef<StyleValue>;
    updateTextareaStyle: () => void;
}
