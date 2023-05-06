import type { ExtractPropTypes, PropType, Ref } from 'vue';
export declare const sliderProps: {
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly max: {
        readonly type: NumberConstructor;
        readonly default: 100;
    };
    readonly min: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly modelValue: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly step: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly tipsRenderer: {
        readonly type: PropType<(val: number) => string | null>;
        readonly default: () => (value: number) => string;
    };
};
export declare type SliderProps = ExtractPropTypes<typeof sliderProps>;
export interface UseSliderEvent {
    sliderRunway: Ref<HTMLDivElement | undefined>;
    popoverShow: Ref<boolean>;
    percentDisplay: Ref<string>;
    currentValue: Ref<number>;
    handleRunwayMousedown: (e: MouseEvent) => void;
    handleButtonMousedown: (e: MouseEvent) => void;
}
