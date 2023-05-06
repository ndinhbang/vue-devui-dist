import { Ref, SetupContext } from 'vue';
import { IInnerTreeNode, IUseCore, IUseSelect } from './use-tree-types';
export declare function useSelect(): (data: Ref<IInnerTreeNode[]>, core: IUseCore, context: SetupContext) => IUseSelect;
