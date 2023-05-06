import type { VNode } from 'vue';
declare const _default: import("vue").DefineComponent<{
    type: {
        type: import("vue").PropType<import("./column-types").ColumnType>;
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
        type: import("vue").PropType<import("./column-types").Formatter>;
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
        type: import("vue").PropType<import("./column-types").SortDirection>;
        default: string;
    };
    sortMethod: {
        type: import("vue").PropType<import("./column-types").SortMethod<unknown>>;
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
        type: import("vue").PropType<import("./column-types").FilterConfig[]>;
        default: never[];
    };
    fixedLeft: {
        type: StringConstructor;
    };
    fixedRight: {
        type: StringConstructor;
    };
    align: {
        type: import("vue").PropType<import("./column-types").ColumnAlign>;
        default: string;
    };
    showOverflowTooltip: {
        type: BooleanConstructor;
        default: boolean;
    };
    checkable: {
        type: import("vue").PropType<(row: unknown, rowIndex: number) => boolean>;
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
}, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "filter-change" | "resizing" | "resize-end" | "resize-start", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: import("vue").PropType<import("./column-types").ColumnType>;
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
        type: import("vue").PropType<import("./column-types").Formatter>;
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
        type: import("vue").PropType<import("./column-types").SortDirection>;
        default: string;
    };
    sortMethod: {
        type: import("vue").PropType<import("./column-types").SortMethod<unknown>>;
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
        type: import("vue").PropType<import("./column-types").FilterConfig[]>;
        default: never[];
    };
    fixedLeft: {
        type: StringConstructor;
    };
    fixedRight: {
        type: StringConstructor;
    };
    align: {
        type: import("vue").PropType<import("./column-types").ColumnAlign>;
        default: string;
    };
    showOverflowTooltip: {
        type: BooleanConstructor;
        default: boolean;
    };
    checkable: {
        type: import("vue").PropType<(row: unknown, rowIndex: number) => boolean>;
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
}>>, {
    type: import("./column-types").ColumnType;
    width: string | number;
    maxWidth: string | number;
    minWidth: string | number;
    order: number;
    align: import("./column-types").ColumnAlign;
    field: string;
    filterable: boolean;
    sortable: boolean;
    sortDirection: import("./column-types").SortDirection;
    filterMultiple: boolean;
    filterList: import("./column-types").FilterConfig[];
    showOverflowTooltip: boolean;
    resizeable: boolean;
    reserveCheck: boolean;
    cellClass: string;
}>;
export default _default;
