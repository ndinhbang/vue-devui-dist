import type { ComponentInternalInstance, Ref } from 'vue';
import { Column, SortMethod, SortDirection } from '../components/column/column-types';
import { DefaultRow } from '../table-types';
export interface TableStore<T = Record<string, unknown>> {
    states: {
        _data: Ref<T[]>;
        flatRows: Ref<T[]>;
        hiddenRowKeys: Ref<string[]>;
        rowLevelMap: Ref<Record<string, number>>;
        _columns: Ref<Column[]>;
        flatColumns: Ref<Column[]>;
        _checkSet: Ref<Set<string>>;
        _checkAll: Ref<boolean>;
        _halfChecked: Ref<boolean>;
        isFixedLeft: Ref<boolean>;
        thList: ComponentInternalInstance[];
        firstDefaultColumn: Ref<string>;
        tableCellModeMap: Ref<Map<string, string>>;
    };
    insertColumn(column: Column, parent: unknown): void;
    sortColumn(): void;
    removeColumn(column: Column): void;
    updateColumns(): void;
    updateRows(): void;
    getCheckedRows(): T[];
    collectTh(th: ComponentInternalInstance): void;
    sortData(direction: SortDirection, sortMethod: SortMethod<T> | undefined): void;
    isRowChecked(row: T, index: number): boolean;
    checkRow(toggle: boolean, row: T, index?: number): void;
    toggleRowExpansion(row: T): void;
    isRowExpanded(row: T): boolean;
    setExpandRows: (rowKeys: string[]) => void;
    toggleRowSelection: (row: T) => void;
    updateFirstDefaultColumn: () => void;
    setCellMode: (row: DefaultRow, rowIndex: number, fields: string | string[], cellMode: string) => void;
    resetCellMode: () => void;
    emitTableEvent: (eventName: string, ...params: unknown[]) => void;
}
export interface UseExpand {
    isRowExpanded: (row: DefaultRow) => boolean;
    updateExpandRows: () => void;
    setExpandRows: (rowKeys: string[]) => void;
    toggleRowExpansion: (row: DefaultRow, expanded?: boolean) => void;
}
export interface UseEditTableCell {
    tableCellModeMap: Ref<Map<string, string>>;
    setCellMode: (row: DefaultRow, rowIndex: number, fields: string | string[], cellMode: string) => void;
    resetCellMode: () => void;
}
