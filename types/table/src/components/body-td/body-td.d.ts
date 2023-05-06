declare const _default: import("vue").DefineComponent<{
    column: {
        type: import("vue").PropType<import("../column/column-types").Column>;
        default: () => unknown;
    };
    row: {
        type: import("vue").PropType<Record<string, unknown>>;
        default: () => Record<string, unknown>;
    };
    rowspan: {
        type: NumberConstructor;
    };
    colspan: {
        type: NumberConstructor;
    };
    index: {
        type: NumberConstructor;
        default: number;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "cellClick", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    column: {
        type: import("vue").PropType<import("../column/column-types").Column>;
        default: () => unknown;
    };
    row: {
        type: import("vue").PropType<Record<string, unknown>>;
        default: () => Record<string, unknown>;
    };
    rowspan: {
        type: NumberConstructor;
    };
    colspan: {
        type: NumberConstructor;
    };
    index: {
        type: NumberConstructor;
        default: number;
    };
}>>, {
    index: number;
    column: import("../column/column-types").Column;
    row: Record<string, unknown>;
}>;
export default _default;
