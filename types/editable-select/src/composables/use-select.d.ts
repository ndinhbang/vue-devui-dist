import { ComputedRef, Ref, SetupContext } from 'vue';
import { EditableSelectProps, Option, Options } from '../editable-select-types';
export interface UseSelectStatesReturnType {
    hoveringIndex: number;
    selectedIndex: number;
    query: string;
    inputValue: string;
    selectedLabel: string;
    isFocus: boolean;
    visible: boolean;
    softFocus: boolean;
    isSilentBlur: boolean;
    inputHovering: boolean;
}
interface UseSelectReturnType {
    cachedOptions: Ref<Options>;
    filteredOptions: ComputedRef<Options>;
    emptyText: ComputedRef<string>;
    showClearable: ComputedRef<boolean>;
    toggleMenu: () => void;
    handleOptionSelect: (option: Option, byClick: boolean) => void;
    scrollToItem: (index: number) => void;
}
export declare type States = UseSelectStatesReturnType;
export declare function useSelectStates(): UseSelectStatesReturnType;
export declare function useSelect(dropdownRef: Ref, props: EditableSelectProps, states: States, setSoftFocus: () => void, ctx: SetupContext): UseSelectReturnType;
export {};
