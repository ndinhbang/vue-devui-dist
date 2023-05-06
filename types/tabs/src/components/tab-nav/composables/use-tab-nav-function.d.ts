import type { ComputedRef, EmitsOptions, SetupContext, ShallowRef } from 'vue';
import { TabsProps, TabsData } from '../../../tabs-types';
import { OffSetData, UseTabNavFunction } from '../tab-nav-types';
export declare function useTabNavFunction(props: TabsProps, tabs: TabsData | undefined, tabsList: ComputedRef, data: OffSetData, ctx: SetupContext<EmitsOptions>, tabsEle: ShallowRef<HTMLUListElement | undefined>): UseTabNavFunction;
