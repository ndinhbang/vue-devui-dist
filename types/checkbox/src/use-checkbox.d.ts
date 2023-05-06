import type { SetupContext } from 'vue';
import { CheckboxProps, UseCheckboxFn, CheckboxGroupProps, UseCheckboxGroupFn, UseCheckboxButtonFn } from './checkbox-types';
export declare function useCheckbox(props: CheckboxProps, ctx: SetupContext): UseCheckboxFn;
export declare function useCheckboxGroup(props: CheckboxGroupProps, ctx: SetupContext): UseCheckboxGroupFn;
export declare function useCheckboxButton(): UseCheckboxButtonFn;
