import type { Ref } from 'vue';
import { DefaultRow, ITable } from '../table-types';
import { UseExpand } from './store-types';
export declare function useExpand(dataSource: Ref<DefaultRow[]>, table: ITable<DefaultRow>): UseExpand;
