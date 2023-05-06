import type { Ref, SetupContext } from 'vue';
import { InputProps, UseInputEvent } from '../input-types';
export declare function useInputEvent(isFocus: Ref<boolean>, props: InputProps, ctx: SetupContext, focus: () => void): UseInputEvent;
