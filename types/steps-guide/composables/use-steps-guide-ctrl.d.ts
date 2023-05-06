import { WritableComputedRef, SetupContext } from 'vue';
import { StepsGuideProps } from '../src/steps-guide-types';
export declare function useStepsGuideCtrl(props: StepsGuideProps, ctx: SetupContext<('guide-close' | 'update:stepIndex')[]>, updateGuidePosition: Function, stepIndex: WritableComputedRef<number>): {
    stepsCount: import("vue").ComputedRef<number>;
    closeGuide: () => void;
    setCurrentIndex: (index: number) => void;
};
