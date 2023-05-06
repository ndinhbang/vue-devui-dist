import type { ExtractPropTypes, PropType } from 'vue';
declare type positionType = 'top-left' | 'top' | 'top-right' | 'left' | 'right' | 'bottom-left' | 'bottom' | 'bottom-right';
export declare type positionConf = {
    left: number;
    top: number;
    type: string;
} | positionType;
export declare type Step = {
    title: string;
    content: string;
    trigger: string;
    target?: string;
    position?: positionConf;
};
export declare const stepsGuideProps: {
    readonly steps: PropType<Step[]>;
    readonly stepIndex: {
        readonly type: NumberConstructor;
        readonly default: undefined;
    };
    readonly showClose: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly showDots: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly scrollToTargetSwitch: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly zIndex: {
        readonly type: NumberConstructor;
        readonly default: 1100;
    };
    readonly stepChange: {
        readonly type: FunctionConstructor;
        readonly default: () => boolean;
    };
};
export declare type StepsGuideProps = ExtractPropTypes<typeof stepsGuideProps>;
export {};
