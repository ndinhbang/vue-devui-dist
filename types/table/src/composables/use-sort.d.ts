import type { Ref } from 'vue';
import { UseSort } from './use-table-types';
export declare function useSort<T extends Record<string, unknown>>(dataSource: Ref<T[]>, _data: Ref<T[]>): UseSort<T>;
