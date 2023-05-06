import { ExtractPropTypes } from 'vue';
export declare const iconProps: {
    name: {
        type: StringConstructor;
        default: string;
        required: boolean;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    component: {
        type: ObjectConstructor;
        default: null;
    };
    classPrefix: {
        type: StringConstructor;
        default: string;
    };
    operable: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    rotate: {
        type: (StringConstructor | NumberConstructor)[];
    };
};
export declare const svgIconProps: {
    name: {
        type: StringConstructor;
        default: string;
        required: boolean;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
};
export declare type IconProps = ExtractPropTypes<typeof iconProps>;
export declare type SvgIconProps = ExtractPropTypes<typeof svgIconProps>;
export interface UseIconDom {
    iconDom: () => JSX.Element;
}
