import { PropType } from 'vue';
import './gantt-scale.scss';
import { GanttScaleUnit, GanttMilestone, GanttScaleDateInfo } from '../gantt-model';
declare const _default: import("vue").DefineComponent<{
    /** 视图单位 */
    unit: {
        type: StringConstructor;
        default: GanttScaleUnit;
    };
    height: {
        type: NumberConstructor;
    };
    /** 开始时间 */
    startDate: {
        type: DateConstructor;
    };
    /** 结束时间 */
    endDate: {
        type: DateConstructor;
    };
    /** 甘特图时间轴容器左偏移像素  */
    ganttScaleContainerOffsetLeft: {
        type: NumberConstructor;
    };
    /** 版本里程碑列表 */
    milestoneList: {
        type: PropType<GanttMilestone[]>;
    };
    scrollElement: {
        type: ObjectConstructor;
    };
    ganttBarContainerElement: {
        type: ObjectConstructor;
    };
}, {
    viewSCaleData: import("vue").Ref<{
        dayOfMonthLabel: string;
        dayOfWeekLabel: string;
        monthLabel: string;
        yearLabel: string;
        date: {
            toString: () => string;
            toDateString: () => string;
            toTimeString: () => string;
            toLocaleString: {
                (): string;
                (locales?: string | string[] | undefined, options?: Intl.DateTimeFormatOptions | undefined): string;
            };
            toLocaleDateString: {
                (): string;
                (locales?: string | string[] | undefined, options?: Intl.DateTimeFormatOptions | undefined): string;
            };
            toLocaleTimeString: {
                (): string;
                (locales?: string | string[] | undefined, options?: Intl.DateTimeFormatOptions | undefined): string;
            };
            valueOf: () => number;
            getTime: () => number;
            getFullYear: () => number;
            getUTCFullYear: () => number;
            getMonth: () => number;
            getUTCMonth: () => number;
            getDate: () => number;
            getUTCDate: () => number;
            getDay: () => number;
            getUTCDay: () => number;
            getHours: () => number;
            getUTCHours: () => number;
            getMinutes: () => number;
            getUTCMinutes: () => number;
            getSeconds: () => number;
            getUTCSeconds: () => number;
            getMilliseconds: () => number;
            getUTCMilliseconds: () => number;
            getTimezoneOffset: () => number;
            setTime: (time: number) => number;
            setMilliseconds: (ms: number) => number;
            setUTCMilliseconds: (ms: number) => number;
            setSeconds: (sec: number, ms?: number | undefined) => number;
            setUTCSeconds: (sec: number, ms?: number | undefined) => number;
            setMinutes: (min: number, sec?: number | undefined, ms?: number | undefined) => number;
            setUTCMinutes: (min: number, sec?: number | undefined, ms?: number | undefined) => number;
            setHours: (hours: number, min?: number | undefined, sec?: number | undefined, ms?: number | undefined) => number;
            setUTCHours: (hours: number, min?: number | undefined, sec?: number | undefined, ms?: number | undefined) => number;
            setDate: (date: number) => number;
            setUTCDate: (date: number) => number;
            setMonth: (month: number, date?: number | undefined) => number;
            setUTCMonth: (month: number, date?: number | undefined) => number;
            setFullYear: (year: number, month?: number | undefined, date?: number | undefined) => number;
            setUTCFullYear: (year: number, month?: number | undefined, date?: number | undefined) => number;
            toUTCString: () => string;
            toISOString: () => string;
            toJSON: (key?: any) => string;
            [Symbol.toPrimitive]: {
                (hint: "default"): string;
                (hint: "string"): string;
                (hint: "number"): number;
                (hint: string): string | number;
            };
        };
        monthStart?: boolean | undefined;
        weekend?: boolean | undefined;
        today?: boolean | undefined;
        highlight?: boolean | undefined;
        highlightStart?: boolean | undefined;
        milestone?: string | undefined;
        scaleStartVisable?: boolean | undefined;
        index?: number | undefined;
    }[]>;
    scaleWidth: import("vue").Ref<{
        day: number;
        week: number;
        month: number;
    }>;
    addMilestone: (info: GanttScaleDateInfo) => void;
    highlight: import("vue").Ref<boolean>;
    highlightStartText: import("vue").Ref<string>;
    highlightEndText: import("vue").Ref<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "addMilestone"[], "addMilestone", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /** 视图单位 */
    unit: {
        type: StringConstructor;
        default: GanttScaleUnit;
    };
    height: {
        type: NumberConstructor;
    };
    /** 开始时间 */
    startDate: {
        type: DateConstructor;
    };
    /** 结束时间 */
    endDate: {
        type: DateConstructor;
    };
    /** 甘特图时间轴容器左偏移像素  */
    ganttScaleContainerOffsetLeft: {
        type: NumberConstructor;
    };
    /** 版本里程碑列表 */
    milestoneList: {
        type: PropType<GanttMilestone[]>;
    };
    scrollElement: {
        type: ObjectConstructor;
    };
    ganttBarContainerElement: {
        type: ObjectConstructor;
    };
}>> & {
    onAddMilestone?: ((...args: any[]) => any) | undefined;
}, {
    unit: string;
}>;
export default _default;
