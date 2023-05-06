import { Ref, SetupContext } from 'vue';
import { TextareaProps, UseTextareaEvent } from '../textarea-types';
export declare function useTextareaEvent(isFocus: Ref<boolean>, props: TextareaProps, ctx: SetupContext): UseTextareaEvent;
