import { ModalType } from './modal-types';
import './modal.scss';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    lockScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
    draggable: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    beforeClose: {
        type: import("vue").PropType<(done: () => void) => void>;
    };
    escapable: {
        type: BooleanConstructor;
        default: boolean;
    };
    showClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    showAnimation: {
        type: BooleanConstructor;
        default: boolean;
    };
    showOverlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    appendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
        type: import("vue").PropType<ModalType>;
        default: string;
    };
    keepLast: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    lockScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
    draggable: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    beforeClose: {
        type: import("vue").PropType<(done: () => void) => void>;
    };
    escapable: {
        type: BooleanConstructor;
        default: boolean;
    };
    showClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    showAnimation: {
        type: BooleanConstructor;
        default: boolean;
    };
    showOverlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    appendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
        type: import("vue").PropType<ModalType>;
        default: string;
    };
    keepLast: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    type: ModalType;
    title: string;
    draggable: boolean;
    modelValue: boolean;
    appendToBody: boolean;
    showAnimation: boolean;
    lockScroll: boolean;
    closeOnClickOverlay: boolean;
    showOverlay: boolean;
    showClose: boolean;
    escapable: boolean;
    keepLast: boolean;
}>;
export default _default;
