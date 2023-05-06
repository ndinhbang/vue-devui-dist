import { Ref, SetupContext } from 'vue';
import { IInnerTreeNode, IUseCore, IUseLazyLoad } from './use-tree-types';
export declare function useLazyLoad(): (data: Ref<IInnerTreeNode[]>, core: IUseCore, context: SetupContext) => IUseLazyLoad;
