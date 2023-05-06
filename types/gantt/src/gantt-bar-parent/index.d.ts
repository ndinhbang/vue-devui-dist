import './gantt-bar-parent.scss';
declare const _default: import("vue").DefineComponent<{
    startDate: {
        type: DateConstructor;
    };
    endDate: {
        type: DateConstructor;
    };
    progressRate: {
        type: NumberConstructor;
        default: number;
    };
    data: {};
    id: {
        type: StringConstructor;
    };
    tip: {
        type: StringConstructor;
    };
    ganttScaleStatusHandler: {
        type: any;
    };
}, {
    left: import("vue").Ref<number>;
    width: import("vue").Ref<number>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    startDate: {
        type: DateConstructor;
    };
    endDate: {
        type: DateConstructor;
    };
    progressRate: {
        type: NumberConstructor;
        default: number;
    };
    data: {};
    id: {
        type: StringConstructor;
    };
    tip: {
        type: StringConstructor;
    };
    ganttScaleStatusHandler: {
        type: any;
    };
}>>, {
    progressRate: number;
    ganttScaleStatusHandler: any;
}>;
export default _default;
