import type { PropType, ExtractPropTypes, ComputedRef, Ref, CSSProperties, InputHTMLAttributes } from 'vue';
export declare type ISize = 'lg' | 'md' | 'sm';
export declare const inputNumberProps: {
    readonly placeholder: {
        readonly type: StringConstructor;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly step: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly max: {
        readonly type: NumberConstructor;
        readonly default: number;
    };
    readonly min: {
        readonly type: NumberConstructor;
        readonly default: number;
    };
    readonly size: {
        readonly type: PropType<ISize>;
    };
    readonly modelValue: {
        readonly type: NumberConstructor;
    };
    readonly precision: {
        readonly type: NumberConstructor;
    };
    readonly reg: {
        readonly type: PropType<string | RegExp>;
        readonly default: "";
    };
};
export declare type InputNumberProps = ExtractPropTypes<typeof inputNumberProps>;
export interface IState {
    currentValue: number | string | undefined;
    userInputValue: number | string | undefined;
}
export interface UseExpose {
    inputRef: Ref<HTMLElement>;
}
export interface UseRender {
    wrapClass: ComputedRef<unknown[]>;
    customStyle: {
        style: CSSProperties;
    };
    otherAttrs: InputHTMLAttributes;
    controlButtonsClass: ComputedRef<Record<string, boolean>>;
    inputWrapClass: ComputedRef<Record<string, boolean>>;
    inputInnerClass: ComputedRef<Record<string, boolean>>;
}
export interface UseEvent {
    inputVal: ComputedRef<number | string | undefined>;
    minDisabled: ComputedRef<boolean>;
    maxDisabled: ComputedRef<boolean>;
    onAdd: () => void;
    onSubtract: () => void;
    onInput: (val: Event) => void;
    onChange: (event: Event) => void;
}
