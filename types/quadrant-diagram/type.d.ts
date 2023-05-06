import type { CSSProperties } from 'vue';
export interface IRangeConfigs {
    min: number;
    max: number;
    step: number;
}
export interface IAxisConfigs {
    tickWidth?: number;
    spaceBetweenLabelsAxis?: number;
    axisMargin?: number;
    xAxisLabel?: string;
    yAxisLabel?: string;
    xWeight?: number;
    yWeight?: number;
    xAxisRange?: IRangeConfigs;
    yAxisRange?: IRangeConfigs;
    originPosition?: {
        left: number;
        bottom: number;
    };
    [propName: string]: unknown;
}
export interface IQuadrantConfigs {
    backgroundColor?: CSSProperties['background-color'];
    color?: CSSProperties['color'];
    title?: string;
    top?: number;
    left?: number;
}
export interface ILabelDataConfigs {
    x: number;
    y: number;
    title: string;
    content?: string;
    progress?: number;
    [propName: string]: unknown;
}
export interface IViewConfigs {
    height: number;
    width: number;
}
export interface ICalAxisConfig {
    axisOrigin?: {
        x?: number | null;
        y?: number | null;
    };
    axisTop?: number | null;
    axisRight?: number | null;
    axisWidth?: number | null;
    axisHeight?: number | null;
    yAxisTicksNum?: number | null;
    xAxisTicksNum?: number | null;
    xTickSpacing?: number | null;
    yTickSpacing?: number | null;
}
export declare type labelSize = 'small' | 'normal' | 'large';
