import { Ref, SetupContext } from 'vue';
import { HandleSearch, RecentlyFocus, TransInputFocusEmit, SourceType, UseInputHandle } from '../auto-complete-types';
export default function useInputHandle(ctx: SetupContext, searchList: Ref<SourceType>, showNoResultItemTemplate: Ref<boolean>, modelValue: Ref<string>, isDisabled: Ref<boolean>, delay: Ref<number>, handleSearch: HandleSearch, transInputFocusEmit: Ref<TransInputFocusEmit>, recentlyFocus: RecentlyFocus, latestSource: Ref): UseInputHandle;
