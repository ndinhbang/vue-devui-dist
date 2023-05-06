import { IInnerTreeNode, ITreeNode } from './use-tree-types';
export declare function flatToNested(flatTree: IInnerTreeNode[]): ITreeNode[];
export declare function generateInnerTree(tree: ITreeNode[], key?: string, level?: number, path?: ITreeNode[]): IInnerTreeNode[];
