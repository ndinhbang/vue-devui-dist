import { Step } from './steps-guide-types';
import './steps-guide.scss';
declare const _default: import("vue").DefineComponent<{
    readonly steps: import("vue").PropType<Step[]>;
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
}, () => JSX.Element | null, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("guide-close" | "update:stepIndex")[], "guide-close" | "update:stepIndex", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly steps: import("vue").PropType<Step[]>;
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
}>> & {
    "onGuide-close"?: ((...args: any[]) => any) | undefined;
    "onUpdate:stepIndex"?: ((...args: any[]) => any) | undefined;
}, {
    readonly zIndex: number;
    readonly showDots: boolean;
    readonly showClose: boolean;
    readonly stepIndex: number;
    readonly scrollToTargetSwitch: boolean;
    readonly stepChange: Function;
}>;
export default _default;
