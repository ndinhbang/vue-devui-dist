import SplitterPane from './components/splitter-pane';
export interface Pane {
    getPaneSize: () => number;
}
export interface PaneState {
    index: number;
    initialSize: number;
    minSize: number;
    maxSize: number;
}
export interface DragState {
    prev: PaneState;
    next: PaneState;
}
export declare type SplitterPane = typeof SplitterPane & Pane;
export interface splitterState {
    panes: Array<SplitterPane>;
    paneCount: number;
    splitterContainerSize: number;
}
export declare class SplitterStore {
    state: splitterState;
    constructor();
    setPanes({ panes }: {
        panes: SplitterPane[];
    }): void;
    setSplitter({ containerSize }: {
        containerSize: number;
    }): void;
    getPane(index: number): SplitterPane;
    dragState(splitbarIndex: number): DragState;
    clamp(minSize: number, maxSize: number, initialSize: number): number;
    resize(paneState: PaneState, moveSize: number): void;
    isResizable(splitBarIndex: number): boolean;
    isStaticBar(splitBarIndex: number): boolean;
    isPercent(size: string): boolean;
    toPixels(size: string): number;
    tooglePane(paneIndex: number, nearPaneIndex: number, lockStatus?: boolean): void;
    setSize(state: DragState, distance: number): void;
}
