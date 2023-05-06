import './step.scss';
declare const _default: import("vue").DefineComponent<{
    readonly title: {
        readonly type: StringConstructor;
        readonly required: true;
    };
    readonly description: {
        readonly type: StringConstructor;
    };
    readonly icon: {
        readonly type: StringConstructor;
    };
    readonly status: {
        readonly type: import("vue").PropType<import("./step-types").IStepStatus>;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly title: {
        readonly type: StringConstructor;
        readonly required: true;
    };
    readonly description: {
        readonly type: StringConstructor;
    };
    readonly icon: {
        readonly type: StringConstructor;
    };
    readonly status: {
        readonly type: import("vue").PropType<import("./step-types").IStepStatus>;
    };
}>>, {}>;
export default _default;
