import type { ICheck, ICheckStrategy, ITreeNode, IInnerTreeNode } from './composables/use-tree-types';
/**
 * true 默认为 both，false 默认为 none。
 * "true" defaults to "both" and "false" to "none".
 */
export declare const formatCheckStatus: (check: ICheck) => ICheckStrategy;
/**
 * Standardized tree node
 * @param trees
 * @param keyName
 * @param childrenName
 * @param parentId
 * @returns IInnerTreeNode[]
 */
export declare const formatBasicTree: (trees: ITreeNode[], keyName?: string, childrenName?: string, parentId?: string | undefined) => IInnerTreeNode[];
