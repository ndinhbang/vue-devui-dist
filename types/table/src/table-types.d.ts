import type { PropType, ExtractPropTypes, ComponentInternalInstance, InjectionKey, Ref, ComputedRef, CSSProperties, ToRefs } from 'vue';
import { TableStore } from './store/store-types';
export declare type TableSize = 'sm' | 'md' | 'lg';
export declare type BorderType = '' | 'bordered' | 'borderless';
export declare type RowKeyType = string | ((v: Record<string, unknown>, index?: number | undefined) => string);
export declare type SpanMethod = (data: {
    row: unknown;
    column: unknown;
    rowIndex: number;
    columnIndex: number;
}) => number[] | {
    rowspan: number;
    colspan: number;
};
export declare const tableProps: {
    data: {
        type: PropType<Record<string, unknown>[]>;
        default: never[];
    };
    striped: {
        type: BooleanConstructor;
        default: boolean;
    };
    scrollable: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxWidth: {
        type: StringConstructor;
    };
    maxHeight: {
        type: StringConstructor;
    };
    tableWidth: {
        type: StringConstructor;
    };
    tableHeight: {
        type: StringConstructor;
    };
    size: {
        type: PropType<TableSize>;
        validator(value: string): boolean;
        default: string;
    };
    rowHoveredHighlight: {
        type: BooleanConstructor;
        default: boolean;
    };
    fixHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    checkable: {
        type: BooleanConstructor;
        default: boolean;
    };
    tableLayout: {
        type: PropType<"fixed" | "auto">;
        default: string;
        validator(v: string): boolean;
    };
    showLoading: {
        type: BooleanConstructor;
        default: boolean;
    };
    headerBg: {
        type: BooleanConstructor;
        default: boolean;
    };
    spanMethod: {
        type: PropType<SpanMethod>;
    };
    borderType: {
        type: PropType<BorderType>;
        default: string;
    };
    empty: {
        type: StringConstructor;
        default: string;
    };
    showHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    rowKey: {
        type: (StringConstructor | (new (...args: any[]) => (v: Record<string, unknown>, index?: number | undefined) => string) | (() => (v: Record<string, unknown>, index?: number | undefined) => string) | ((new (...args: any[]) => (v: Record<string, unknown>, index?: number | undefined) => string) | (() => (v: Record<string, unknown>, index?: number | undefined) => string) | {
            (): (v: Record<string, unknown>, index?: number | undefined) => string;
            new (): any;
            readonly prototype: any;
        })[])[];
        default: string;
    };
    defaultExpandAll: {
        type: BooleanConstructor;
        default: boolean;
    };
    expandRowKeys: {
        type: PropType<string[]>;
    };
    indent: {
        type: NumberConstructor;
        default: number;
    };
    lazy: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare type TableProps = ExtractPropTypes<typeof tableProps>;
export declare type DefaultRow = TableProps['data'][number];
export interface ITable<T = DefaultRow> extends ComponentInternalInstance {
    store: TableStore<T>;
    props: TableProps;
    tableId: string;
    hiddenColumns: Ref<HTMLElement | null>;
    tableRef: Ref<HTMLElement>;
    updateColumnWidth: () => void;
}
export interface TableMethods<T = Record<string, unknown>> {
    getCheckedRows(): T[];
}
export declare const TABLE_TOKEN: InjectionKey<ITable>;
export interface UseTable {
    classes: ComputedRef<Record<string, boolean>>;
    styles: ComputedRef<CSSProperties>;
}
export declare type UseFixedColumn = ToRefs<{
    stickyClass: ComputedRef<Record<string, boolean>>;
    stickyStyle: ComputedRef<CSSProperties>;
}>;
export interface UseTableLayout {
    tableWidth: Ref;
    updateColumnWidth: () => void;
}
export declare type ITableInstanceAndDefaultRow = ComponentInternalInstance & ITable<DefaultRow>;
