import type { VNode, ComponentInternalInstance } from 'vue';
export declare const isValid: (value?: unknown) => boolean;
export declare const isEmptyElement: (c?: VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> | undefined) => boolean;
export declare const flattenChildren: (children?: VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[] | undefined, filterEmpty?: boolean) => VNode[];
export declare const findDOMNode: (instance: (ComponentInternalInstance & {
    $el: VNode['el'];
}) | null) => VNode['el'];
export declare const isFF: boolean;
