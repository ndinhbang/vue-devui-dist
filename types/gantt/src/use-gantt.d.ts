import { GanttScaleUnit } from './gantt-model';
export declare const useGantt: (scaleUnit?: GanttScaleUnit) => {
    getDurationWidth: (startDate: Date, endDate: Date) => number;
};
