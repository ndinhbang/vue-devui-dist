import type { ComputedRef, Ref } from 'vue';
export interface ITreeNode {
    label: string;
    id?: string;
    children?: ITreeNode[];
    selected?: boolean;
    checked?: boolean;
    expanded?: boolean;
    disableSelect?: boolean;
    disableCheck?: boolean;
    disableToggle?: boolean;
    isLeaf?: boolean;
}
export interface IInnerTreeNode extends ITreeNode {
    id: string;
    level: number;
    idType?: 'random';
    parentId?: string;
    isLeaf?: boolean;
    parentChildNodeCount?: number;
    currentIndex?: number;
    loading?: boolean;
    childNodeCount?: number;
    isMatched?: boolean;
    childrenMatched?: boolean;
    isHide?: boolean;
    matchedText?: string;
}
export declare type valueof<T> = T[keyof T];
export interface IUseCore {
    getLevel: (node: IInnerTreeNode) => number;
    getChildren: (node: IInnerTreeNode, config?: {
        expanded?: boolean;
        recursive?: boolean;
    }) => IInnerTreeNode[];
    clearNodeMap: () => void;
    getParent: (node: IInnerTreeNode) => IInnerTreeNode;
    getExpendedTree: () => ComputedRef<IInnerTreeNode[]>;
    getIndex: (node: IInnerTreeNode) => number;
    getNode: (node: IInnerTreeNode) => IInnerTreeNode;
    setNodeValue: (node: IInnerTreeNode, key: keyof IInnerTreeNode, value: valueof<IInnerTreeNode>) => void;
    setTree: (newTree: IInnerTreeNode[]) => void;
    getTree: () => IInnerTreeNode[];
}
export interface IUseCheck {
    checkNode: (node: IInnerTreeNode) => void;
    uncheckNode: (node: IInnerTreeNode) => void;
    toggleCheckNode: (node: IInnerTreeNode) => void;
    getCheckedNodes: () => IInnerTreeNode[];
}
export interface IUseDisable {
    disableSelectNode: (node: IInnerTreeNode) => void;
    disableCheckNode: (node: IInnerTreeNode) => void;
    disableToggleNode: (node: IInnerTreeNode) => void;
    enableSelectNode: (node: IInnerTreeNode) => void;
    enableCheckNode: (node: IInnerTreeNode) => void;
    enableToggleNode: (node: IInnerTreeNode) => void;
}
export interface IUseOperate {
    insertBefore: (parentNode: ITreeNode, node: ITreeNode, referenceNode?: ITreeNode) => void;
    removeNode: (node: ITreeNode) => void;
    editNode: (node: ITreeNode, label: string) => void;
}
export interface IUseSelect {
    selectNode: (node: IInnerTreeNode) => void;
    deselectNode: (node: IInnerTreeNode) => void;
    toggleSelectNode: (node: IInnerTreeNode) => void;
    getSelectedNode: () => IInnerTreeNode;
}
export interface IUseToggle {
    expandNode: (node: IInnerTreeNode) => void;
    collapseNode: (node: IInnerTreeNode) => void;
    toggleNode: (node: IInnerTreeNode) => void;
    expandAllNodes: () => void;
}
export interface IUseMergeNodes {
    mergeTreeNodes: () => void;
}
export interface IUseLazyLoad {
    lazyLoadNodes: (node: IInnerTreeNode) => void;
}
export interface IUseInitSelectCollection {
    setInitSelectedNode: (node: IInnerTreeNode) => void;
    getInitSelectedNodes: () => IInnerTreeNode[];
    clearInitSelectedNodes: () => void;
}
export interface SearchFilterOption {
    isFilter: boolean;
    matchKey?: string;
    pattern?: RegExp;
}
export interface IUseSearchFilter {
    virtualListRef: Ref<HTMLElement | undefined>;
    searchTree: (target: string, option: SearchFilterOption) => void;
}
export interface IDropType {
    dropPrev?: boolean;
    dropNext?: boolean;
    dropInner?: boolean;
}
export declare type ICheckStrategy = 'upward' | 'downward' | 'both' | 'none';
export declare type ICheck = boolean | ICheckStrategy;
export declare type IDragdrop = boolean | IDropType;
export declare type IOperateItem = 'add' | 'delete' | 'edit';
export declare type IOperate = boolean | IOperateItem | Array<IOperateItem>;
export interface LazyNodeResult {
    treeItems: ITreeNode[];
    node: IInnerTreeNode;
}
export interface DragState {
    dropType?: keyof Required<IDropType>;
    draggingNode?: HTMLElement | null;
    draggingTreeNode?: IInnerTreeNode | null;
}
export interface IUseDraggable {
    onDragstart: (event: DragEvent, treeNode: IInnerTreeNode) => void;
    onDragover: (event: DragEvent) => void;
    onDragleave: (event: DragEvent) => void;
    onDrop: (event: DragEvent, dropNode: IInnerTreeNode) => void;
    onDragend: (event: DragEvent) => void;
}
export interface IDropNode {
    target: ITreeNode[];
    index: number;
    item: ITreeNode;
}
export declare type IUseTree = {
    treeData: Ref<IInnerTreeNode[]>;
} & IUseCore & IUseToggle & IUseSelect & IUseCheck & IUseDisable & IUseOperate & IUseMergeNodes & IUseLazyLoad & IUseSearchFilter & IUseDraggable;
