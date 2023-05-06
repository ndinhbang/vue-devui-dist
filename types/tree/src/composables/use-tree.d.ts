import { SetupContext } from 'vue';
import { IInnerTreeNode, ITreeNode, IUseCore, IUseTree } from './use-tree-types';
export declare const DEFAULT_TREE_PLUGINS: ((data: import("vue").Ref<IInnerTreeNode[]>, core: IUseCore, context: SetupContext<import("vue").EmitsOptions>, lazyLode: import("./use-tree-types").IUseLazyLoad) => import("./use-tree-types").IUseToggle)[];
export declare function useTree(tree: ITreeNode[], plugins: never[] | undefined, context: SetupContext): Partial<IUseTree>;
