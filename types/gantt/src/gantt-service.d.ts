import { Observable } from 'rxjs';
import { GanttBarStatus, GanttScaleConfig, GanttScaleUnit } from './gantt-model';
export declare class GanttService {
    static DAY_DURATION: number;
    scaleUnit: GanttScaleUnit;
    scaleStartDate: Date;
    scaleEndDate: Date;
    ganttBarStatusChange: any;
    ganttScaleConfigChange: any;
    mouseDownListener: Observable<number>;
    mouseMoveListener: any;
    mouseEndListener: any;
    changeGanttBarStatus(status: GanttBarStatus): void;
    registContainerEvents(scrollContainer: HTMLElement): void;
    changeGanttScaleConfig(status: GanttScaleConfig): void;
    setScaleConfig(config: GanttScaleConfig): void;
    getScaleUnitPixel(): number;
    getDatePostionOffset(date: Date): number;
    getDuration(startDate: Date, endDate: Date): number;
    getDurationWidth(startDate: Date, endDate: Date): number;
    isSomeDate(date: Date, compareDate: Date): boolean;
    roundDate(date: Date): void;
}
