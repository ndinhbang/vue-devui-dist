import type { ExtractPropTypes, PropType } from 'vue';
export declare type ITableColumn = {
    key: string;
    title: string;
    type?: 'turn';
};
export declare type ITableDataRow = Record<string, any>;
export declare const apiTableProps: {
    readonly columns: {
        readonly type: PropType<ITableColumn[]>;
        readonly required: true;
        readonly default: () => never[];
    };
    readonly data: {
        readonly type: PropType<ITableDataRow[]>;
        readonly default: () => never[];
    };
};
export declare type ApiTableProps = ExtractPropTypes<typeof apiTableProps>;
