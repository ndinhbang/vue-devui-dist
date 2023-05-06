import { DefaultRow, ITable, RowKeyType } from './table-types';
export declare function formatWidth(width: number | string): number | string;
export declare function getRowIdentity(row: DefaultRow, rowKey: RowKeyType, index?: number): string;
export declare function getRowKeysMap(data: DefaultRow[], rowKey: RowKeyType): Record<string, {
    row: DefaultRow;
    index: number;
}>;
export declare function toggleRowExpandStatus(rowsArr: DefaultRow[], row: DefaultRow, status?: boolean): boolean;
export declare function toggleRowVisible(expand: boolean, table: ITable<DefaultRow>, key: string): void;
