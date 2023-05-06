import type { ExtractPropTypes, PropType } from 'vue';
import { IViewConfigs, IAxisConfigs } from '../type';
export declare const quadrantDiagramProps: {
    readonly diagramId: {
        readonly type: StringConstructor;
        readonly default: "1";
    };
    readonly axisConfigs: {
        readonly type: PropType<IAxisConfigs>;
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
        readonly type: PropType<IViewConfigs>;
        readonly default: {
            height: number;
            width: number;
        };
    };
};
export declare type QuadrantDiagramProps = ExtractPropTypes<typeof quadrantDiagramProps>;
