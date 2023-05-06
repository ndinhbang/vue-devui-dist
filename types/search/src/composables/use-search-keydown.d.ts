/**
 * 清空按钮显示、隐藏
 */
import { SetupContext, Ref } from 'vue';
import { KeydownReturnTypes, SearchProps } from '../search-types';
declare type EmitProps = 'update:modelValue' | 'search';
export declare const keydownHandles: (ctx: SetupContext<EmitProps[]>, keywords: Ref<string>, props: SearchProps) => KeydownReturnTypes;
export {};
