import { Ref, SetupContext } from 'vue';
import { ICheckStrategy, IInnerTreeNode, IUseCore, IUseCheck } from './use-tree-types';
export declare function useCheck(options?: Ref<{
    checkStrategy: ICheckStrategy;
}>): (data: Ref<IInnerTreeNode[]>, core: IUseCore, context: SetupContext) => IUseCheck;
