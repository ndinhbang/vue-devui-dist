import type { ComputedRef } from 'vue';
import { IInnerTreeNode } from './use-tree-types';
export interface IUseTreeNode {
    nodeClass: ComputedRef<(string | false | undefined)[]>;
    nodeStyle: ComputedRef<{
        paddingLeft: string;
    }>;
    nodeContentClass: ComputedRef<(string | false | undefined)[]>;
    nodeTitleClass: ComputedRef<(string | false | undefined)[]>;
    nodeVLineClass: ComputedRef<(string | false | undefined)[]>;
    nodeVLineStyles: ComputedRef<{
        height: string;
        left: string;
        top: string;
    }[]>;
    nodeHLineClass: ComputedRef<(string | false | undefined)[]>;
    nodeOperationAreaClass: ComputedRef<string>;
    matchedContents: ComputedRef<string[]>;
    highlightCls: string;
}
export declare function useTreeNode(data: ComputedRef<IInnerTreeNode>): IUseTreeNode;
