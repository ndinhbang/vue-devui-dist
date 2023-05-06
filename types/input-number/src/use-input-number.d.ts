import type { SetupContext, Ref } from 'vue';
import { InputNumberProps, UseEvent, UseRender, UseExpose } from './input-number-types';
export declare function useRender(props: InputNumberProps, ctx: SetupContext): UseRender;
export declare function useExpose(ctx: SetupContext): UseExpose;
export declare function useEvent(props: InputNumberProps, ctx: SetupContext, inputRef: Ref): UseEvent;
