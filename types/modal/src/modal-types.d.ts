import type { PropType, ExtractPropTypes } from 'vue';
export declare type ModalType = 'success' | 'failed' | 'warning' | 'info' | '';
export declare const modalProps: {
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
        type: PropType<(done: () => void) => void>;
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
        type: PropType<ModalType>;
        default: string;
    };
    keepLast: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare type EmitName = 'update:modelValue';
export declare type EmitEventFn = (event: EmitName, result?: boolean) => void;
export interface UseModal {
    execClose: () => void;
}
export declare type ModalProps = ExtractPropTypes<typeof modalProps>;
