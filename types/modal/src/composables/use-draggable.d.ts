import type { ComputedRef, Ref } from 'vue';
interface Draggable {
    clearPosition: () => void;
    modalPosition: Ref<string>;
}
export declare const useDraggable: (targetRef: Ref<HTMLElement | undefined>, dragRef: Ref<HTMLElement | undefined>, draggable: ComputedRef<boolean>) => Draggable;
export {};
