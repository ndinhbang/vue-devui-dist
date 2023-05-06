import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    readonly currentPageSize: NumberConstructor;
    readonly pageSizeChange: FunctionConstructor;
    readonly pageSizeOptions: PropType<number[]>;
}, {
    paginationConfig: import("vue").Ref<null>;
    isShowConfig: import("vue").Ref<boolean>;
    closeConfigMenu: (e: Event) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly currentPageSize: NumberConstructor;
    readonly pageSizeChange: FunctionConstructor;
    readonly pageSizeOptions: PropType<number[]>;
}>>, {}>;
export default _default;
