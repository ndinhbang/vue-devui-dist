import { Ref, SetupContext } from 'vue';
import { AutoCompleteProps, HandleSearch } from '../auto-complete-types';
export default function useLazyHandle(props: AutoCompleteProps, ctx: SetupContext, handleSearch: HandleSearch): {
    showLoading: Ref<boolean>;
    dropDownRef: Ref;
    loadMore: () => void;
};
