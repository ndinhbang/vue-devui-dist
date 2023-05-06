import { ComputedRef } from 'vue';
import type { SetupContext, Ref } from 'vue';
import { AutoCompleteProps, UseAutoCompleteRender, AutoCompleteSize } from '../auto-complete-types';
export declare function useAutoCompleteRender(props: AutoCompleteProps, ctx: SetupContext, visible: Ref<boolean>, isFocus: Ref<boolean>, isDisabled: ComputedRef<boolean>, autoCompleteSize: ComputedRef<AutoCompleteSize>): UseAutoCompleteRender;
