import { SetupContext } from 'vue';
import type { ToRefs, ComputedRef } from 'vue';
import { ITable } from '../../table-types';
import type { Column, TableColumnProps, TableColumn } from './column-types';
export declare function createColumn(id: string, props: ToRefs<TableColumnProps>, ctx: SetupContext): Column;
export declare function useRender<T>(): {
    columnOrTableParent: ComputedRef<ITable<T> | TableColumn>;
    getColumnIndex: (children: Array<unknown>, child: unknown) => number;
};
