import type { ExtractPropTypes, PropType, Slot, Ref } from 'vue';
export declare const drawerProps: {
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    zIndex: {
        type: NumberConstructor;
        default: number;
    };
    showOverlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    escKeyCloseable: {
        type: BooleanConstructor;
        default: boolean;
    };
    position: {
        type: PropType<"left" | "right">;
        default: string;
    };
    lockScroll: {
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
};
export declare const drawerOverlayProps: {
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    onClick: {
        type: FunctionConstructor;
    };
};
declare type DrawerEmitEvent = 'update:modelValue' | 'close' | 'open';
export declare type DrawerEmit = (event: DrawerEmitEvent, result?: unknown) => void;
export declare type DrawerProps = ExtractPropTypes<typeof drawerProps>;
export declare type DrawerOverlayProps = ExtractPropTypes<typeof drawerOverlayProps>;
export declare type DrawerOptions = Partial<DrawerProps> & {
    content?: string | Slot;
};
export declare type UseDrawerFn = {
    overlayRef: Ref<HTMLElement | undefined>;
    drawerRef: Ref<HTMLElement | undefined>;
    drawerClasses: Ref<Record<string, boolean>>;
    handleOverlayClick: () => void;
};
export {};
