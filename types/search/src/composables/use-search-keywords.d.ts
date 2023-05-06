/**
 * 输入框内容定义、删改操作
 */
import { SetupContext } from 'vue';
import { SearchProps, KeywordsReturnTypes } from '../search-types';
declare type EmitProps = 'update:modelValue' | 'search';
export declare const keywordsHandles: (ctx: SetupContext<EmitProps[]>, props: SearchProps) => KeywordsReturnTypes;
export {};
