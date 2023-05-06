import { Ref } from 'vue';
import { IInnerTreeNode, IUseCore, IUseOperate } from './use-tree-types';
export declare function useOperate(): (data: Ref<IInnerTreeNode[]>, core: IUseCore) => IUseOperate;
