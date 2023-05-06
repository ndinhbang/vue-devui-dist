import { Ref, SetupContext } from 'vue';
import { FormatterType, SearchFnType, SourceType, SourceItemObj } from '../auto-complete-types';
export default function useSearchFn(ctx: SetupContext, allowEmptyValueSearch: Ref<boolean>, source: Ref<SourceType>, searchFn: Ref<SearchFnType>, formatter: Ref<FormatterType>): {
    handleSearch: (term: string, enableLazyLoad?: boolean) => Promise<void>;
    recentlyFocus: (latestSource: Array<SourceItemObj>) => void;
    searchList: Ref<SourceType>;
    showNoResultItemTemplate: Ref<boolean>;
};
