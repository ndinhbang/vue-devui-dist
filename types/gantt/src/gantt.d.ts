import './gantt.scss';
declare const _default: import("vue").DefineComponent<{
    readonly startDate: {
        readonly type: DateConstructor;
    };
    readonly endDate: {
        readonly type: DateConstructor;
    };
    readonly unit: {
        readonly type: import("vue").PropType<import("./gantt-model").GanttScaleUnit>;
        readonly default: import("./gantt-model").GanttScaleUnit.day;
    };
    readonly progressRate: {
        readonly type: NumberConstructor;
    };
}, {
    ganttContainer: import("vue").Ref<any>;
    ganttScaleWidth: import("vue").Ref<number | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly startDate: {
        readonly type: DateConstructor;
    };
    readonly endDate: {
        readonly type: DateConstructor;
    };
    readonly unit: {
        readonly type: import("vue").PropType<import("./gantt-model").GanttScaleUnit>;
        readonly default: import("./gantt-model").GanttScaleUnit.day;
    };
    readonly progressRate: {
        readonly type: NumberConstructor;
    };
}>>, {
    readonly unit: import("./gantt-model").GanttScaleUnit;
}>;
export default _default;
