import { Ref } from 'vue';
import { IInnerTreeNode, IUseCore } from './use-tree-types';
export declare function useCore(): (data: Ref<IInnerTreeNode[]>) => IUseCore;
