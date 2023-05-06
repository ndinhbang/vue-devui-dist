import { Ref, SetupContext } from 'vue';
import { EditableSelectProps } from '../editable-select-types';
import { States } from './use-select';
export interface UseInputEventReturnType {
    blur: () => void;
    setSoftFocus: () => void;
    onMouseenter: () => void;
    onMouseleave: () => void;
    onInput: (e: Event) => void;
    handleBlur: (e: FocusEvent) => void;
    handleFocus: (e: FocusEvent) => void;
    handleClear: (e: Event) => void;
}
export declare function useInputEvent(inputRef: Ref<HTMLInputElement | undefined>, props: EditableSelectProps, states: States, ctx: SetupContext): UseInputEventReturnType;
