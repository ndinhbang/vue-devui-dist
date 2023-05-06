import { PropType, ExtractPropTypes } from 'vue';
export declare type ArrowTrigger = 'hover' | 'never' | 'always';
export declare type DotTrigger = 'click' | 'hover';
export declare type DotPosition = 'bottom' | 'top';
export declare const carouselProps: {
    readonly arrowTrigger: {
        readonly type: PropType<ArrowTrigger>;
        readonly default: "hover";
    };
    readonly autoplay: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly autoplaySpeed: {
        readonly type: NumberConstructor;
        readonly default: 3000;
    };
    readonly height: {
        readonly type: StringConstructor;
        readonly default: "100%";
    };
    readonly showDots: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly dotTrigger: {
        readonly type: PropType<DotTrigger>;
        readonly default: "click";
    };
    readonly dotPosition: {
        readonly type: PropType<DotPosition>;
        readonly default: "bottom";
    };
    readonly activeIndex: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly transitionSpeed: {
        readonly type: NumberConstructor;
        readonly default: 500;
    };
};
export declare type CarouselProps = ExtractPropTypes<typeof carouselProps>;
