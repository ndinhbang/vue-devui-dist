import { Ref } from 'vue';
import type { SetupContext } from 'vue';
import type { DefaultRow, ITable } from '../table-types';
import type { TableStore } from './store-types';
/**
 * 创建 TableStore
 * @param dataSource 数据源
 * @param table 表对象
 * @returns TableStore
 */
export declare function createStore<T extends Record<string, unknown>>(dataSource: Ref<T[]>, table: ITable<DefaultRow>, ctx: SetupContext): TableStore<T>;
