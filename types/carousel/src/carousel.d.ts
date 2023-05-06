import { DotTrigger } from './types';
import './carousel.scss';
declare const _default: import("vue").DefineComponent<{
    readonly arrowTrigger: {
        readonly type: import("vue").PropType<import("./types").ArrowTrigger>;
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
        readonly type: import("vue").PropType<DotTrigger>;
        readonly default: "click";
    };
    readonly dotPosition: {
        readonly type: import("vue").PropType<import("./types").DotPosition>;
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
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:activeIndex" | "activeIndexChange")[], "update:activeIndex" | "activeIndexChange", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly arrowTrigger: {
        readonly type: import("vue").PropType<import("./types").ArrowTrigger>;
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
        readonly type: import("vue").PropType<DotTrigger>;
        readonly default: "click";
    };
    readonly dotPosition: {
        readonly type: import("vue").PropType<import("./types").DotPosition>;
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
}>> & {
    "onUpdate:activeIndex"?: ((...args: any[]) => any) | undefined;
    onActiveIndexChange?: ((...args: any[]) => any) | undefined;
}, {
    readonly height: string;
    readonly autoplay: boolean;
    readonly arrowTrigger: import("./types").ArrowTrigger;
    readonly autoplaySpeed: number;
    readonly showDots: boolean;
    readonly dotTrigger: DotTrigger;
    readonly dotPosition: import("./types").DotPosition;
    readonly activeIndex: number;
    readonly transitionSpeed: number;
}>;
export default _default;
