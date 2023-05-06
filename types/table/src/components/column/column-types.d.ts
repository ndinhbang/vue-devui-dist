import type { PropType, ExtractPropTypes, VNode, Slot, ComponentInternalInstance, SetupContext, Slots, ComputedRef } from 'vue';
import { DefaultRow, TableProps } from '../../table-types';
import { TableStore } from '../../store/store-types';
export declare type SortMethod<T = unknown> = (a: T, b: T) => boolean;
export declare type ColumnType = 'checkable' | 'index' | 'expand' | 'editable' | '';
export declare type SortDirection = 'ASC' | 'DESC' | '';
export declare type ColumnAlign = 'left' | 'center' | 'right';
export interface FilterConfig {
    name: string;
    value: unknown;
    checked?: boolean;
}
declare type BaseFormatter<T> = (row: DefaultRow, column: T, cellValue: unknown, rowIndex: number) => VNode;
export interface Column {
    id: string;
    type?: ColumnType;
    field: string;
    width: number | string;
    minWidth: number | string;
    maxWidth: number | string;
    realWidth?: number | string;
    header?: string;
    order?: number;
    sortable?: boolean;
    sortDirection?: SortDirection;
    filterable?: boolean;
    filterMultiple?: boolean;
    filterList?: FilterConfig[];
    fixedLeft?: string;
    fixedRight?: string;
    align?: ColumnAlign;
    cellClass: string;
    showOverflowTooltip?: boolean;
    resizeable: boolean;
    ctx?: SetupContext;
    customFilterTemplate?: Slot;
    renderHeader?: (column: Column, store: TableStore) => VNode;
    renderCell?: (rowData: DefaultRow, columnItem: Column, store: TableStore, rowIndex: number, props?: TableProps, cellMode?: ComputedRef<string>, ctx?: SetupContext) => VNode;
    formatter?: BaseFormatter<Column>;
    sortMethod?: SortMethod;
    subColumns?: Slot;
    slots: Slots;
}
export declare type LevelColumn = {
    children?: LevelColumn[];
    level?: number;
    colSpan?: number;
    rowSpan?: number;
    isSubColumn?: boolean;
} & Column;
export declare type Formatter = BaseFormatter<Column>;
export declare const tableColumnProps: {
    type: {
        type: PropType<ColumnType>;
        default: string;
    };
    header: {
        type: StringConstructor;
    };
    field: {
        type: StringConstructor;
        default: string;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    minWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    maxWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    formatter: {
        type: PropType<Formatter>;
    };
    order: {
        type: NumberConstructor;
        default: number;
    };
    sortable: {
        type: BooleanConstructor;
        default: boolean;
    };
    sortDirection: {
        type: PropType<SortDirection>;
        default: string;
    };
    sortMethod: {
        type: PropType<SortMethod<unknown>>;
    };
    filterable: {
        type: BooleanConstructor;
        default: boolean;
    };
    filterMultiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    filterList: {
        type: PropType<FilterConfig[]>;
        default: never[];
    };
    fixedLeft: {
        type: StringConstructor;
    };
    fixedRight: {
        type: StringConstructor;
    };
    align: {
        type: PropType<ColumnAlign>;
        default: string;
    };
    showOverflowTooltip: {
        type: BooleanConstructor;
        default: boolean;
    };
    checkable: {
        type: PropType<(row: unknown, rowIndex: number) => boolean>;
    };
    resizeable: {
        type: BooleanConstructor;
        default: boolean;
    };
    reserveCheck: {
        type: BooleanConstructor;
        default: boolean;
    };
    cellClass: {
        type: StringConstructor;
        default: string;
    };
};
export declare type TableColumnProps = ExtractPropTypes<typeof tableColumnProps>;
export interface TableColumn extends ComponentInternalInstance {
    tableId?: string;
    parent: TableColumn;
    columnId: string;
    columnConfig: Partial<Column>;
}
export {};
