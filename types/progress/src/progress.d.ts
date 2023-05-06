import { ISvgData } from './progress-types';
import './progress.scss';
declare const _default: import("vue").DefineComponent<{
    height: {
        type: StringConstructor;
        default: string;
    };
    percentage: {
        type: NumberConstructor;
        default: number;
    };
    percentageText: {
        type: StringConstructor;
        default: string;
    };
    barBgColor: {
        type: StringConstructor;
        default: string;
    };
    isCircle: {
        type: BooleanConstructor;
        default: boolean;
    };
    strokeWidth: {
        type: NumberConstructor;
        default: number;
    };
    showContent: {
        type: BooleanConstructor;
        default: boolean;
    };
    percentageTextPlacement: {
        type: StringConstructor;
        default: string;
    };
    percentageTextColor: {
        type: StringConstructor;
        default: string;
    };
}, {
    data: ISvgData;
    normalPercentage: import("vue").Ref<number>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    height: {
        type: StringConstructor;
        default: string;
    };
    percentage: {
        type: NumberConstructor;
        default: number;
    };
    percentageText: {
        type: StringConstructor;
        default: string;
    };
    barBgColor: {
        type: StringConstructor;
        default: string;
    };
    isCircle: {
        type: BooleanConstructor;
        default: boolean;
    };
    strokeWidth: {
        type: NumberConstructor;
        default: number;
    };
    showContent: {
        type: BooleanConstructor;
        default: boolean;
    };
    percentageTextPlacement: {
        type: StringConstructor;
        default: string;
    };
    percentageTextColor: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    height: string;
    strokeWidth: number;
    showContent: boolean;
    percentage: number;
    percentageText: string;
    barBgColor: string;
    isCircle: boolean;
    percentageTextPlacement: string;
    percentageTextColor: string;
}>;
export default _default;
