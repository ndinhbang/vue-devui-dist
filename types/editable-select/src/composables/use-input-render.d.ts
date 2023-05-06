import { ComputedRef } from 'vue';
import { EditableSelectProps } from '../editable-select-types';
import { States } from './use-select';
interface UseInputRenderReturnType {
    inputClasses: ComputedRef<Record<string, boolean>>;
    inputPlaceholderClasses: ComputedRef<Record<string, boolean>>;
    inputWrapperClasses: ComputedRef<Record<string, boolean>>;
    inputInnerClasses: ComputedRef<Record<string, boolean>>;
    inputSuffixClasses: ComputedRef<Record<string, boolean>>;
}
export declare function useInputRender(props: EditableSelectProps, states: States): UseInputRenderReturnType;
export {};
