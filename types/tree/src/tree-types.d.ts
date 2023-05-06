import type { ExtractPropTypes, PropType } from 'vue';
import type { ICheck, IOperate, ITreeNode, IDragdrop, IInnerTreeNode } from './composables/use-tree-types';
export declare const treeProps: {
    height: {
        type: PropType<string | number>;
    };
    check: {
        type: PropType<ICheck>;
        default: boolean;
    };
    dragdrop: {
        type: PropType<IDragdrop>;
        default: boolean;
    };
    operate: {
        type: PropType<IOperate>;
        default: boolean;
    };
    data: {
        type: PropType<ITreeNode[]>;
        default: never[];
    };
};
export declare const treeNodeProps: {
    check: {
        type: PropType<ICheck>;
        default: boolean;
    };
    dragdrop: {
        type: PropType<IDragdrop>;
        default: boolean;
    };
    operate: {
        type: PropType<IOperate>;
        default: boolean;
    };
    data: {
        type: PropType<IInnerTreeNode>;
        default: {};
    };
};
export declare type TreeProps = ExtractPropTypes<typeof treeProps>;
export declare type TreeNodeProps = ExtractPropTypes<typeof treeNodeProps>;
