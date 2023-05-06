import { Ref } from 'vue';
import { IInnerTreeNode, IUseCore, IUseDisable } from './use-tree-types';
export declare function useDisable(): (data: Ref<IInnerTreeNode[]>, core: IUseCore) => IUseDisable;
