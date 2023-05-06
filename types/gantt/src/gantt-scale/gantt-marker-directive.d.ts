import { GanttScaleUnit } from '../gantt-model';
interface BindingType {
    value: {
        ganttBarContainerElement: HTMLElement;
        ganttScaleContainerOffsetLeft: number;
        monthMark: boolean;
        weekend: boolean;
        today: boolean;
        milestone: string;
        unit: GanttScaleUnit;
        date: Date;
        last: boolean;
    };
}
declare const ganttMarkerDirective: {
    ganttBarContainerElement: null;
    monthMarkElement: null;
    weekendElement: null;
    todayElement: null;
    milestoneElement: null;
    monthMark: string;
    mounted(el: HTMLElement, binding: BindingType): void;
    updated(el: HTMLElement, binding: BindingType): void;
    initMarkElement(): void;
};
export default ganttMarkerDirective;
