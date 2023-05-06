import type { InjectionKey, Slot } from 'vue';
import { ModalProps } from '../modal-types';
import { CommonModalService, ModalOpenResult } from './common-modal-service';
export interface ModalOptions {
    title?: string;
    lockScroll?: boolean;
    closeOnClickOverlay?: boolean;
    header: Slot;
    content: Slot;
    footer: Slot;
    beforeClose: (done: () => void) => void;
}
export declare class ModalService extends CommonModalService<ModalOptions, ModalProps> {
    static token: InjectionKey<ModalService>;
    component(): unknown;
    open(props?: Partial<ModalOptions>): ModalOpenResult;
}
