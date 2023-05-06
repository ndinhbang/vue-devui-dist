import type { PropType, ExtractPropTypes } from 'vue';
import type { LineStyle, TimePosition } from '../timeline-types';
export declare type Position = 'top' | 'bottom' | 'left' | 'right';
export declare type Type = 'primary' | 'success' | 'warning' | 'error';
export declare const timeAxisItemProps: {
    readonly time: {
        readonly type: StringConstructor;
    };
    readonly dotColor: {
        readonly type: StringConstructor;
    };
    readonly lineStyle: {
        readonly type: PropType<LineStyle>;
        readonly default: "solid";
    };
    readonly lineColor: {
        readonly type: StringConstructor;
    };
    readonly position: {
        readonly type: PropType<Position>;
    };
    readonly timePosition: {
        readonly type: PropType<TimePosition>;
        readonly default: "left";
    };
    readonly type: {
        readonly type: PropType<Type>;
        readonly default: "primary";
    };
};
export declare type TimelineItemProps = ExtractPropTypes<typeof timeAxisItemProps>;
