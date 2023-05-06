import { Ref } from 'vue';
export interface MoveableResult {
    movingX: Ref<number>;
    movingY: Ref<number>;
    handleRef: Ref<HTMLElement | null | undefined>;
    moveElRef: Ref<HTMLElement | null | undefined>;
    reset(): void;
}
export declare const useMoveable: (moveable?: Ref<boolean> | boolean) => MoveableResult;
