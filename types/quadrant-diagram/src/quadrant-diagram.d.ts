import type { ExtractPropTypes } from 'vue';
declare const _default: import("vue").DefineComponent<{
    readonly diagramId: {
        readonly type: StringConstructor;
        readonly default: "1";
    };
    readonly axisConfigs: {
        readonly type: import("vue").PropType<import("../type").IAxisConfigs>;
        readonly default: {
            tickWidth: number;
            spaceBetweenLabelsAxis: number;
            xAxisLabel: string;
            yAxisLabel: string;
            xAxisRange: {
                min: number;
                max: number;
                step: number;
            };
            yAxisRange: {
                min: number;
                max: number;
                step: number;
            };
            originPosition: {
                left: number;
                bottom: number;
            };
            axisMargin: number;
            xWeight: number;
            yWeight: number;
        };
    };
    readonly view: {
        readonly type: import("vue").PropType<import("../type").IViewConfigs>;
        readonly default: {
            height: number;
            width: number;
        };
    };
}, {
    diagramId: import("vue").Ref<string>;
    calAxisConfig: {
        axisOrigin?: {
            x?: number | null | undefined;
            y?: number | null | undefined;
        } | undefined;
        axisTop?: number | null | undefined;
        axisRight?: number | null | undefined;
        axisWidth?: number | null | undefined;
        axisHeight?: number | null | undefined;
        yAxisTicksNum?: number | null | undefined;
        xAxisTicksNum?: number | null | undefined;
        xTickSpacing?: number | null | undefined;
        yTickSpacing?: number | null | undefined;
        tickWidth?: number | undefined;
        spaceBetweenLabelsAxis?: number | undefined;
        axisMargin?: number | undefined;
        xAxisLabel?: string | undefined;
        yAxisLabel?: string | undefined;
        xWeight?: number | undefined;
        yWeight?: number | undefined;
        xAxisRange?: {
            min: number;
            max: number;
            step: number;
        } | undefined;
        yAxisRange?: {
            min: number;
            max: number;
            step: number;
        } | undefined;
        originPosition?: {
            left: number;
            bottom: number;
        } | undefined;
    };
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly diagramId: {
        readonly type: StringConstructor;
        readonly default: "1";
    };
    readonly axisConfigs: {
        readonly type: import("vue").PropType<import("../type").IAxisConfigs>;
        readonly default: {
            tickWidth: number;
            spaceBetweenLabelsAxis: number;
            xAxisLabel: string;
            yAxisLabel: string;
            xAxisRange: {
                min: number;
                max: number;
                step: number;
            };
            yAxisRange: {
                min: number;
                max: number;
                step: number;
            };
            originPosition: {
                left: number;
                bottom: number;
            };
            axisMargin: number;
            xWeight: number;
            yWeight: number;
        };
    };
    readonly view: {
        readonly type: import("vue").PropType<import("../type").IViewConfigs>;
        readonly default: {
            height: number;
            width: number;
        };
    };
}>>, {
    readonly view: import("../type").IViewConfigs;
    readonly diagramId: string;
    readonly axisConfigs: import("../type").IAxisConfigs;
}>;
export default _default;
