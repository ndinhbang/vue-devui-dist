/**
 * 定义组件class
 */
import { ComputedRef, Ref } from 'vue';
import { CascaderProps, CascaderulProps, CascaderItemPropsType } from '../src/cascader-types';
export declare const useRootClassName: (props: CascaderProps, menuShow: Ref<boolean>) => ComputedRef;
export declare const useListClassName: (props: CascaderItemPropsType) => ComputedRef;
export declare const useUlClassName: (props: CascaderulProps) => ComputedRef;
export declare const dropdownOpenClass: (status: boolean) => string;
