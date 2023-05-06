interface clickEvent extends MouseEvent {
    path: HTMLElement[];
}
export declare function useClick(e: clickEvent): void;
export {};
