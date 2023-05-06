import { SetupContext, ComputedRef } from 'vue';
import type { VNode } from 'vue';
import { DefaultRow, TableProps } from '../../table-types';
import { Column } from './column-types';
import { TableStore } from '../../store/store-types';
import './column.scss';
export declare const cellMap: {
    checkable: {
        renderHeader(column: Column, store: TableStore): VNode;
        renderCell(rowData: DefaultRow, column: Column, store: TableStore, rowIndex: number): VNode;
    };
    index: {
        renderHeader(column: Column): VNode;
        renderCell(rowData: DefaultRow, column: Column, store: TableStore, rowIndex: number): number;
    };
    expand: {
        renderHeader(): VNode;
        renderCell(rowData: DefaultRow, column: Column, store: TableStore): VNode;
    };
    editable: {
        renderHeader(column: Column): VNode;
        renderCell(rowData: DefaultRow, column: Column, store: TableStore, rowIndex: number, props: TableProps, cellMode: ComputedRef<string>, ctx: SetupContext): VNode;
    };
    default: {
        renderHeader(column: Column): VNode;
        renderCell(rowData: DefaultRow, column: Column, store: TableStore, rowIndex: number, props: TableProps, cellMode: ComputedRef<string>, ctx: SetupContext): VNode;
    };
};
