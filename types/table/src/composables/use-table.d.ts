import type { Ref } from 'vue';
import { Column } from '../components/column/column-types';
import { ITable, DefaultRow, TableProps, UseTable, UseFixedColumn, UseTableLayout } from '../table-types';
import { TableStore } from '../store/store-types';
export declare function useTable(props: TableProps, tableWidth: Ref): UseTable;
export declare const useFixedColumn: (column: Ref<Column>) => UseFixedColumn;
export declare function useTableLayout(table: ITable<DefaultRow>): UseTableLayout;
export declare function useTableWatcher(props: TableProps, store: TableStore): void;
