import { Ref } from 'vue';
import { ColorPickerColor, CssColorObject } from './color-utils-types';
export declare function colorPickerResize(colorCubeRef: Ref<HTMLElement | null>, top: Ref<number>, left: Ref<number>): void;
export declare function isExhibitionColorPicker(event: PointerEvent, colorCubeRef: Ref<HTMLElement | null>, pickerRef: Ref<HTMLElement | null>, showColorPicker: Ref<boolean>): void;
export declare function useReactive<T>(source: () => T): Ref<T | undefined>;
export declare function changeColorValue(value: ColorPickerColor, maxValue: number): CssColorObject;
