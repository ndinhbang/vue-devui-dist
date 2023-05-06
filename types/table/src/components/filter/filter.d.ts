import './filter.scss';
declare const _default: import("vue").DefineComponent<{
    filterList: {
        type: import("vue").PropType<import("../column/column-types").FilterConfig[]>;
        default: () => import("../column/column-types").FilterConfig[];
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "filter", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    filterList: {
        type: import("vue").PropType<import("../column/column-types").FilterConfig[]>;
        default: () => import("../column/column-types").FilterConfig[];
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    multiple: boolean;
    filterList: import("../column/column-types").FilterConfig[];
}>;
export default _default;
