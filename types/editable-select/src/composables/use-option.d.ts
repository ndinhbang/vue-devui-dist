import { ComputedRef } from 'vue';
import { EditableSelectOptionProps } from '../components/option/option-types';
interface UseOptionReturnType {
    optionClasses: ComputedRef<Record<string, boolean>>;
}
export declare function useOption(props: EditableSelectOptionProps): UseOptionReturnType;
export {};
