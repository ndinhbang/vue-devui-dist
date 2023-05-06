import { Ref, SetupContext } from 'vue';
import { IInnerTreeNode, IUseCore, IUseToggle, IUseLazyLoad } from './use-tree-types';
export declare function useToggle(): (data: Ref<IInnerTreeNode[]>, core: IUseCore, context: SetupContext, lazyLode: IUseLazyLoad) => IUseToggle;
