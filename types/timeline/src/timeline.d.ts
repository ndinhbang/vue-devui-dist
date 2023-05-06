import './timeline.scss';
declare const _default: import("vue").DefineComponent<{
    readonly direction: {
        readonly type: import("vue").PropType<import("./timeline-types").TimelineDirection>;
        readonly default: "vertical";
    };
    readonly center: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly mode: {
        readonly type: import("vue").PropType<import("./timeline-types").Mode>;
        readonly default: "normal";
    };
    readonly timePosition: {
        readonly type: import("vue").PropType<import("./timeline-types").TimePosition>;
        readonly default: "left";
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, never[], never, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly direction: {
        readonly type: import("vue").PropType<import("./timeline-types").TimelineDirection>;
        readonly default: "vertical";
    };
    readonly center: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly mode: {
        readonly type: import("vue").PropType<import("./timeline-types").Mode>;
        readonly default: "normal";
    };
    readonly timePosition: {
        readonly type: import("vue").PropType<import("./timeline-types").TimePosition>;
        readonly default: "left";
    };
}>> & {}, {
    readonly center: boolean;
    readonly direction: import("./timeline-types").TimelineDirection;
    readonly mode: import("./timeline-types").Mode;
    readonly timePosition: import("./timeline-types").TimePosition;
}>;
export default _default;
