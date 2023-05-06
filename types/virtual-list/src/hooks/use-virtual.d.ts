import type { ComputedRef } from 'vue';
import { VirtualListProps } from '../virtual-list-types';
interface IUseVirtual {
    isVirtual: ComputedRef<boolean>;
    inVirtual: ComputedRef<boolean>;
}
export default function useVirtual(props: VirtualListProps): IUseVirtual;
export {};
