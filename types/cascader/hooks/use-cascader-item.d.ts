import { Ref } from 'vue';
import { CascaderProps, UseCascaderItemCallback, CascaderItem } from '../src/cascader-types';
export declare const useCascaderItem: (props: CascaderProps, stopDefault?: Ref<boolean> | undefined, tagList?: CascaderItem[] | undefined) => UseCascaderItemCallback;
