import { ITableColumn, ITableDataRow } from './devui-api-table.type';
declare const _default: import("vue").DefineComponent<{
    readonly columns: {
        readonly type: import("vue").PropType<ITableColumn[]>;
        readonly required: true;
        readonly default: () => never[];
    };
    readonly data: {
        readonly type: import("vue").PropType<ITableDataRow[]>;
        readonly default: () => never[];
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly columns: {
        readonly type: import("vue").PropType<ITableColumn[]>;
        readonly required: true;
        readonly default: () => never[];
    };
    readonly data: {
        readonly type: import("vue").PropType<ITableDataRow[]>;
        readonly default: () => never[];
    };
}>>, {
    readonly data: ITableDataRow[];
    readonly columns: ITableColumn[];
}>;
export default _default;
