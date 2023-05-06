import type { PropType, ExtractPropTypes, SetupContext } from 'vue';
export declare type TimelineDirection = 'vertical' | 'horizontal';
export declare type Mode = 'normal' | 'alternative';
export declare type TimePosition = 'left' | 'bottom';
export declare type LineStyle = 'solid' | 'dashed' | 'dotted' | 'none';
export declare const timeAxisProps: {
    readonly direction: {
        readonly type: PropType<TimelineDirection>;
        readonly default: "vertical";
    };
    readonly center: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly mode: {
        readonly type: PropType<Mode>;
        readonly default: "normal";
    };
    readonly timePosition: {
        readonly type: PropType<TimePosition>;
        readonly default: "left";
    };
};
export declare type TimelineProps = ExtractPropTypes<typeof timeAxisProps>;
export interface TimelineRootType {
    ctx: SetupContext;
    props: TimelineProps;
}
