import { SetupContext } from 'vue';
import { RadioProps, RadioGroupProps, UseRadioFn, UseRadioButtonFn } from './radio-types';
export declare function useRadio(props: RadioProps, ctx: SetupContext): UseRadioFn;
export declare function useRadioGroup(props: RadioGroupProps, ctx: SetupContext): void;
export declare function useRadioButton(): UseRadioButtonFn;
