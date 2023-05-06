import { GutterScreenSizes } from './grid-types';
import './row.scss';
declare const _default: import("vue").DefineComponent<{
    readonly align: {
        readonly type: import("vue").PropType<import("./grid-types").Align>;
        readonly default: "top";
    };
    readonly gutter: {
        readonly type: import("vue").PropType<number | number[] | GutterScreenSizes>;
        readonly default: 0;
    };
    readonly justify: {
        readonly type: import("vue").PropType<import("./grid-types").Justify>;
        readonly default: "start";
    };
    readonly wrap: {
        readonly type: import("vue").PropType<boolean>;
        readonly default: false;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, never[], never, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly align: {
        readonly type: import("vue").PropType<import("./grid-types").Align>;
        readonly default: "top";
    };
    readonly gutter: {
        readonly type: import("vue").PropType<number | number[] | GutterScreenSizes>;
        readonly default: 0;
    };
    readonly justify: {
        readonly type: import("vue").PropType<import("./grid-types").Justify>;
        readonly default: "start";
    };
    readonly wrap: {
        readonly type: import("vue").PropType<boolean>;
        readonly default: false;
    };
}>> & {}, {
    readonly wrap: boolean;
    readonly justify: import("./grid-types").Justify;
    readonly align: import("./grid-types").Align;
    readonly gutter: number | number[] | GutterScreenSizes;
}>;
export default _default;
