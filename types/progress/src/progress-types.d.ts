import { ExtractPropTypes, Ref } from 'vue';
interface ISvgPath {
    stroke: Ref<string> | string;
    strokeDasharray: string;
    strokeDashoffset: string;
    transition: string;
}
export interface ISvgData {
    pathString: string;
    trailPath: ISvgPath | null;
    strokePath: ISvgPath | null;
}
export declare const progressProps: {
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
};
export declare type ProgressProps = ExtractPropTypes<typeof progressProps>;
export {};
