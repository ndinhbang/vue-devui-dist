import { ColorPickerColor, position, ColorInt, HSV, HSVA, RGB, RGBA, HSL, HSLA, Hex, Hexa, Color } from './color-utils-types';
export declare function isCssColor(color?: string | false): boolean;
export declare function colorToInt(color: Color): ColorInt;
export declare function intToHex(color: ColorInt): string;
export declare function colorToHex(color: Color): string;
/**
 * Converts HSVA to RGBA. Based on formula from https://en.wikipedia.org/wiki/HSL_and_HSV
 *
 * @param color HSVA color as an array [0-360, 0-1, 0-1, 0-1]
 */
export declare function HSVAtoRGBA(hsva: HSVA): RGBA;
/**
 * Converts RGBA to HSVA. Based on formula from https://en.wikipedia.org/wiki/HSL_and_HSV
 *
 * @param color RGBA color as an array [0-255, 0-255, 0-255, 0-1]
 */
export declare function RGBAtoHSVA(rgba: RGBA): HSVA;
export declare function HSVAtoHSLA(hsva: HSVA): HSLA;
export declare function HSLAtoHSVA(hsl: HSLA): HSVA;
export declare function RGBAtoCSS(rgba: RGBA): string;
export declare function RGBtoCSS(rgba: RGBA): string;
export declare function RGBAtoHex(rgba: RGBA): Hex;
export declare function HexToRGBA(hex: Hex): RGBA;
export declare function HexToHSVA(hex: Hex): HSVA;
export declare function HSVAtoHex(hsva: HSVA): Hex;
export declare function parseHex(hex: string): Hex;
export declare function RGBtoInt(rgba: RGBA): ColorInt;
export declare function fromHSVA(hsva: HSVA): Partial<ColorPickerColor>;
export declare function fromRGBA(rgba: RGBA): Partial<ColorPickerColor>;
export declare function fromHexa(hexa: Hexa): Partial<ColorPickerColor>;
export declare function fromHSLA(hsla: HSLA): Partial<ColorPickerColor>;
export declare function fromHex(hex: Hex): Partial<ColorPickerColor>;
export declare function parseColor(color: Color, oldColor?: Partial<ColorPickerColor>): Partial<ColorPickerColor>;
export declare function extractColor(color: ColorPickerColor, input: Color, mode: string, showAlpha: boolean): string | ColorPickerColor | Record<string, unknown> | undefined;
export declare function hasAlpha(color: Color): boolean;
export declare const elementResize: (parentElement: HTMLElement) => position;
export declare function RGBtoRGBA(rgba: RGBA): RGBA;
export declare function RGBtoHSV(rgb: RGB): HSV;
export declare function HSVtoHSL(hsv: HSV): HSL;
