import { PropType, ExtractPropTypes } from 'vue';
declare const _default: import("vue").DefineComponent<{
    readonly size: {
        readonly type: PropType<"" | "sm" | "lg">;
        readonly default: "";
    };
    readonly preLink: StringConstructor;
    readonly nextLink: StringConstructor;
    readonly lite: BooleanConstructor;
    readonly cursor: NumberConstructor;
    readonly maxItems: NumberConstructor;
    readonly totalPages: NumberConstructor;
    readonly onChangeCursorEmit: PropType<(v: number) => void>;
    readonly showTruePageIndex: BooleanConstructor;
}, {
    showPageNum: import("vue").ComputedRef<number[]>;
    changeCursor: (pageSize: number) => void;
    prevChange: (page: number) => void;
    nextChange: (page: number) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "changeCursorEmit"[], "changeCursorEmit", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly size: {
        readonly type: PropType<"" | "sm" | "lg">;
        readonly default: "";
    };
    readonly preLink: StringConstructor;
    readonly nextLink: StringConstructor;
    readonly lite: BooleanConstructor;
    readonly cursor: NumberConstructor;
    readonly maxItems: NumberConstructor;
    readonly totalPages: NumberConstructor;
    readonly onChangeCursorEmit: PropType<(v: number) => void>;
    readonly showTruePageIndex: BooleanConstructor;
}>> & {
    onChangeCursorEmit?: ((...args: any[]) => any) | undefined;
}, {
    readonly size: "" | "sm" | "lg";
    readonly showTruePageIndex: boolean;
    readonly lite: boolean;
}>;
export default _default;
