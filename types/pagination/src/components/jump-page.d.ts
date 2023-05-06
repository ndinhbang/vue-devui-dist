import { PropType, ExtractPropTypes } from 'vue';
declare const _default: import("vue").DefineComponent<{
    goToText: StringConstructor;
    size: {
        type: PropType<"" | "sm" | "lg">;
        default: string;
    };
    pageIndex: NumberConstructor;
    showJumpButton: BooleanConstructor;
    totalPages: NumberConstructor;
    cursor: NumberConstructor;
    onChangeCursorEmit: PropType<(v: number) => void>;
}, {
    inputNum: import("vue").Ref<number | undefined>;
    jumpPageChange: (currentPage: number) => void;
    jump: (e: KeyboardEvent | 'btn') => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "changeCursorEmit"[], "changeCursorEmit", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    goToText: StringConstructor;
    size: {
        type: PropType<"" | "sm" | "lg">;
        default: string;
    };
    pageIndex: NumberConstructor;
    showJumpButton: BooleanConstructor;
    totalPages: NumberConstructor;
    cursor: NumberConstructor;
    onChangeCursorEmit: PropType<(v: number) => void>;
}>> & {
    onChangeCursorEmit?: ((...args: any[]) => any) | undefined;
}, {
    size: "" | "sm" | "lg";
    showJumpButton: boolean;
}>;
export default _default;
