import { Ref } from 'vue';
import { GanttMilestone, GanttScaleDateInfo } from '../gantt-model';
export declare const useScaleData: (milestoneList: Ref<GanttMilestone[]>) => {
    generateScaleData: (startDate: Date, endDate: Date) => GanttScaleDateInfo[];
};
