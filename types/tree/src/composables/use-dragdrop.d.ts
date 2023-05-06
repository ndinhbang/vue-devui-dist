import type { Ref } from 'vue';
import type { TreeProps } from '../tree-types';
import type { IUseDraggable, IInnerTreeNode } from './use-tree-types';
export declare function useDragdrop(props: TreeProps, data: Ref<IInnerTreeNode[]>): () => IUseDraggable;
