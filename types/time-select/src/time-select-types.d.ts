import { PropType, Ref, ExtractPropTypes, ComputedRef } from 'vue';
declare type Size = 'lg' | 'md' | 'sm';
export declare const timeSelectProps: {
    readonly modelValue: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly start: {
        readonly type: StringConstructor;
        readonly default: "00:00";
    };
    readonly end: {
        readonly type: StringConstructor;
        readonly default: "24:00";
    };
    readonly step: {
        readonly type: StringConstructor;
        readonly default: "00:30";
    };
    readonly minTime: {
        readonly type: StringConstructor;
        readonly default: "-1:-1";
    };
    readonly maxTime: {
        readonly type: StringConstructor;
        readonly default: "24:00";
    };
    readonly placeholder: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly size: {
        readonly type: PropType<Size>;
    };
    readonly 'onUpdate:modelValue': {
        readonly type: PropType<(v: boolean) => void>;
    };
    readonly clearable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
};
export declare type TimeSelectProps = ExtractPropTypes<typeof timeSelectProps>;
export interface TimeListType {
    value: string;
    name: string;
    [key: string]: unknown;
}
export declare type useTimeSelectFn = {
    changeData: (data: TimeListType) => void;
    options: ComputedRef<TimeListType[]>;
    select: Ref<HTMLElement | undefined>;
    clearData: (value: string) => void;
    focusFun: (e: FocusEvent) => void;
    blurFun: (e: FocusEvent) => void;
};
export interface Time {
    hour: number;
    minute: number;
}
export {};
