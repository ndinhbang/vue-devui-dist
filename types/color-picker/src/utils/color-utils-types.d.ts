import type { Ref } from 'vue';
export declare type ColorModeType = 'hsl' | 'rgb' | 'hsv' | 'hsv' | 'hex';
export declare type ColorInt = number;
export declare type HSV = {
    h: number;
    s: number;
    v: number;
};
export declare type HSVA = HSV & {
    a: number;
};
export declare type RGB = {
    r: number;
    g: number;
    b: number;
};
export declare type RGBA = RGB & {
    a: number;
};
export declare type HSL = {
    h: number;
    s: number;
    l: number;
};
export declare type HSLA = HSL & {
    a: number;
};
export declare type Hex = string;
export declare type Hexa = string;
export declare type Color = string | number | {
    [key: string]: unknown;
};
export interface ProvideColorOptions {
    mode?: ColorModeType;
    showAlpha?: boolean;
    tab?: string;
    dotSize?: number;
    swatches?: string[];
    showHistory?: boolean;
}
export interface CssColorObject {
    color?: Hex;
}
export interface ColorPickerColor {
    alpha: number;
    hex: Hex;
    hexa: Hexa;
    hsl: HSL;
    hsla: HSLA;
    hsv: HSV;
    hsva: HSVA;
    hue: number;
    rgb: RGB;
    rgba: RGBA;
}
export interface position {
    left?: Ref<number>;
    top?: Ref<number>;
    right?: Ref<number>;
    bottom?: Ref<number>;
}
