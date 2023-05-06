import { Slots, VNode } from 'vue';
export interface ModalOpenResult {
    hide(): void;
}
export declare abstract class CommonModalService<Options, Props> {
    anchorContainer: HTMLElement;
    constructor(anchorContainer: HTMLElement);
    abstract component(): string;
    abstract open(options: Partial<Options>): ModalOpenResult;
    protected renderModal(anchor: HTMLElement, props: Partial<Props>, children?: Slots): VNode;
    protected renderNull(anchor: HTMLElement): void;
}
