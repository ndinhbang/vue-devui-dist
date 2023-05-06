import type { PropType, ExtractPropTypes } from 'vue';
import { GanttScaleUnit } from './gantt-model';
export declare const ganttProps: {
    readonly startDate: {
        readonly type: DateConstructor;
    };
    readonly endDate: {
        readonly type: DateConstructor;
    };
    readonly unit: {
        readonly type: PropType<GanttScaleUnit>;
        readonly default: GanttScaleUnit.day;
    };
    readonly progressRate: {
        readonly type: NumberConstructor;
    };
};
export declare type GanttProps = ExtractPropTypes<typeof ganttProps>;
