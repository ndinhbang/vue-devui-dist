import { SetupContext, UnwrapRef, Ref } from 'vue';
import { CascaderItem, CascaderProps, UseFilterFn, CascaderItemNeedType, CascaderValueType } from '../src/cascader-types';
export declare const useFilter: (props: CascaderProps, ctx: SetupContext, menuShow: Ref<boolean>, cascaderItemNeedProps: CascaderItemNeedType, updateCascaderView: (value: CascaderValueType, currentOption: CascaderItem[], index: number) => void, inputValue: Ref<string>, cascaderOptions: UnwrapRef<[CascaderItem[]]>) => UseFilterFn;
