import type { PropType, ExtractPropTypes } from 'vue';
export declare type Align = 'top' | 'middle' | 'bottom';
export declare type Justify = 'start' | 'end' | 'center' | 'around' | 'between';
export interface GutterScreenSizes {
    xs?: number | number[];
    sm?: number | number[];
    md?: number | number[];
    lg?: number | number[];
    xl?: number | number[];
    xxl?: number | number[];
    [key: string]: number | number[];
}
export declare const rowProps: {
    readonly align: {
        readonly type: PropType<Align>;
        readonly default: "top";
    };
    readonly gutter: {
        readonly type: PropType<number | number[] | GutterScreenSizes>;
        readonly default: 0;
    };
    readonly justify: {
        readonly type: PropType<Justify>;
        readonly default: "start";
    };
    readonly wrap: {
        readonly type: PropType<boolean>;
        readonly default: false;
    };
};
export declare type RowProps = ExtractPropTypes<typeof rowProps>;
export declare const colPropsBaseStyle: {
    readonly flex: PropType<string | number>;
    readonly order: PropType<number>;
};
export declare const colPropsBaseClass: {
    readonly offset: PropType<number>;
    readonly pull: PropType<number>;
    readonly push: PropType<number>;
    readonly span: PropType<number>;
};
export declare type ColPropsBaseClass = ExtractPropTypes<typeof colPropsBaseClass>;
export declare type ColPropsBaseStyle = ExtractPropTypes<typeof colPropsBaseStyle>;
export declare const screenSizes: {
    readonly xs: PropType<number | ColPropsBaseClass>;
    readonly sm: PropType<number | ColPropsBaseClass>;
    readonly md: PropType<number | ColPropsBaseClass>;
    readonly lg: PropType<number | ColPropsBaseClass>;
    readonly xl: PropType<number | ColPropsBaseClass>;
    readonly xxl: PropType<number | ColPropsBaseClass>;
};
export declare type ScreenSizes = ExtractPropTypes<typeof screenSizes>;
export declare const colProps: {
    xs: PropType<number | ColPropsBaseClass>;
    sm: PropType<number | ColPropsBaseClass>;
    md: PropType<number | ColPropsBaseClass>;
    lg: PropType<number | ColPropsBaseClass>;
    xl: PropType<number | ColPropsBaseClass>;
    xxl: PropType<number | ColPropsBaseClass>;
    offset: PropType<number>;
    pull: PropType<number>;
    push: PropType<number>;
    span: PropType<number>;
    flex: PropType<string | number>;
    order: PropType<number>;
};
export declare type ColProps = ExtractPropTypes<typeof colProps>;
