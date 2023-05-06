import { Type } from './timeline-item-types';
declare const _default: import("vue").DefineComponent<{
    readonly time: {
        readonly type: StringConstructor;
    };
    readonly dotColor: {
        readonly type: StringConstructor;
    };
    readonly lineStyle: {
        readonly type: import("vue").PropType<import("../timeline-types").LineStyle>;
        readonly default: "solid";
    };
    readonly lineColor: {
        readonly type: StringConstructor;
    };
    readonly position: {
        readonly type: import("vue").PropType<import("./timeline-item-types").Position>;
    };
    readonly timePosition: {
        readonly type: import("vue").PropType<import("../timeline-types").TimePosition>;
        readonly default: "left";
    };
    readonly type: {
        readonly type: import("vue").PropType<Type>;
        readonly default: "primary";
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, never[], never, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly time: {
        readonly type: StringConstructor;
    };
    readonly dotColor: {
        readonly type: StringConstructor;
    };
    readonly lineStyle: {
        readonly type: import("vue").PropType<import("../timeline-types").LineStyle>;
        readonly default: "solid";
    };
    readonly lineColor: {
        readonly type: StringConstructor;
    };
    readonly position: {
        readonly type: import("vue").PropType<import("./timeline-item-types").Position>;
    };
    readonly timePosition: {
        readonly type: import("vue").PropType<import("../timeline-types").TimePosition>;
        readonly default: "left";
    };
    readonly type: {
        readonly type: import("vue").PropType<Type>;
        readonly default: "primary";
    };
}>> & {}, {
    readonly type: Type;
    readonly timePosition: import("../timeline-types").TimePosition;
    readonly lineStyle: import("../timeline-types").LineStyle;
}>;
export default _default;
