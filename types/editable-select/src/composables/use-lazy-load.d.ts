import { Ref, SetupContext } from 'vue';
import { EditableSelectProps } from '../editable-select-types';
interface UseLazyLoadReturnType {
    loadMore: () => void;
}
export declare function useLazyLoad(dropdownRef: Ref<HTMLElement | undefined>, props: EditableSelectProps, ctx: SetupContext): UseLazyLoadReturnType;
export {};
