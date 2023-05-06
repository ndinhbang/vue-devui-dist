import { Ref } from 'vue';
import type { SetupContext } from 'vue';
import { SelectProps, UseSelectReturnType } from './select-types';
export default function useSelect(props: SelectProps, selectRef: Ref<HTMLElement | undefined>, ctx: SetupContext, focus: () => void, blur: () => void, isSelectFocus: Ref<boolean>, t: (path: string) => unknown): UseSelectReturnType;
