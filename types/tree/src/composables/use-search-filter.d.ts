import { Ref } from 'vue';
import { IInnerTreeNode, IUseCore, IUseSearchFilter } from './use-tree-types';
export declare function useSearchFilter(): (data: Ref<IInnerTreeNode[]>, core: IUseCore) => IUseSearchFilter;
