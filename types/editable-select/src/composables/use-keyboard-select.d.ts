import { Ref } from 'vue';
import { EditableSelectProps, Option, Options } from '../editable-select-types';
import { States } from './use-select';
export interface UseKeyboardSelectReturnType {
    onKeydown: (e: KeyboardEvent) => void;
}
export declare function useKeyboardSelect(props: EditableSelectProps, states: States, filteredOptions: Ref<Options>, scrollToItem: (index: number) => void, handleOptionSelect: (option: Option, byClick: boolean) => void): UseKeyboardSelectReturnType;
