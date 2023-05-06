import { Ref, SetupContext } from 'vue';
import { DefaultFuncType, FormatterType, HandleSearch, SelectValueType, SourceItemObj, SourceType } from '../auto-complete-types';
export default function useSelectHandle(ctx: SetupContext, searchList: Ref<SourceType>, selectValue: Ref<SelectValueType>, handleSearch: HandleSearch, formatter: Ref<FormatterType>, handleClose: DefaultFuncType): {
    selectedIndex: Ref<number>;
    selectOptionClick: (item: string | SourceItemObj) => Promise<void>;
};
