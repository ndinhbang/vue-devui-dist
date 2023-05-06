import { Ref } from 'vue';
import { IInnerTreeNode, IUseCore, IUseMergeNodes } from './use-tree-types';
export declare function useMergeNodes(): (data: Ref<IInnerTreeNode[]>, core: IUseCore) => IUseMergeNodes;
