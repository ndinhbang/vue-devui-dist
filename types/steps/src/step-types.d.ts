import type { PropType, ExtractPropTypes } from 'vue';
export declare type IStepStatus = 'wait' | 'process' | 'finish' | 'success' | 'error';
export declare const stepProps: {
    readonly title: {
        readonly type: StringConstructor;
        readonly required: true;
    };
    readonly description: {
        readonly type: StringConstructor;
    };
    readonly icon: {
        readonly type: StringConstructor;
    };
    readonly status: {
        readonly type: PropType<IStepStatus>;
    };
};
export declare type StepProps = ExtractPropTypes<typeof stepProps>;
