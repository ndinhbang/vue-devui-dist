import { ComputedRef } from 'vue';
import { Step, StepsGuideProps } from '../src/steps-guide-types';
export declare function useStepsGuidePosition(props: StepsGuideProps, currentStep: ComputedRef<Step>): {
    stepsRef: import("vue").Ref<null>;
    guidePosition: {
        left: string;
        top: string;
        zIndex: number;
    };
    guideClassList: string[];
    updateGuidePosition: () => false | undefined;
};
