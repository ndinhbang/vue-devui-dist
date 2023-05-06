import { Ref } from 'vue';
import { DefaultFuncType, SelectOptionClick, SourceType } from '../auto-complete-types';
export default function useKeyBoardHandle(dropDownRef: Ref, visible: Ref<boolean>, searchList: Ref<SourceType>, selectedIndex: Ref<number>, searchStatus: Ref<boolean>, showNoResultItemTemplate: Ref<boolean>, selectOptionClick: SelectOptionClick, handleClose: DefaultFuncType): {
    hoverIndex: Ref<number>;
    handlekeyDown: (e: KeyboardEvent) => void;
};
