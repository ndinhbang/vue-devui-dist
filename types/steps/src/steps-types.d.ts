import type { ExtractPropTypes, PropType } from 'vue';
export declare type IStepsDirection = 'horizontal' | 'vertical';
export declare const stepsProps: {
    readonly modelValue: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly space: {
        readonly type: NumberConstructor;
    };
    readonly alignCenter: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly direction: {
        readonly type: PropType<IStepsDirection>;
        readonly default: "horizontal";
    };
    readonly simple: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
};
export declare type StepsProps = ExtractPropTypes<typeof stepsProps>;
