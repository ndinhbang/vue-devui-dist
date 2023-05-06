import type { PropType, ExtractPropTypes } from 'vue';
declare type ModeType = PropType<'normal' | 'immersive'>;
export declare const fullscreenProps: {
    readonly modelValue: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly mode: {
        readonly type: ModeType;
        readonly default: "normal";
    };
    readonly zIndex: {
        readonly type: NumberConstructor;
        readonly default: 10;
    };
};
export declare type FullscreenProps = ExtractPropTypes<typeof fullscreenProps>;
export {};
