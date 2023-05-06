import './sort.scss';
declare const _default: import("vue").DefineComponent<{
    sortDirection: {
        type: import("vue").PropType<import("../column/column-types").SortDirection>;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "sort"[], "sort", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    sortDirection: {
        type: import("vue").PropType<import("../column/column-types").SortDirection>;
        default: string;
    };
}>> & {
    onSort?: ((...args: any[]) => any) | undefined;
}, {
    sortDirection: import("../column/column-types").SortDirection;
}>;
export default _default;
