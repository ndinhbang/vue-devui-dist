import type { FunctionalComponent, VNode } from 'vue';
import { RenderFunc, SharedConfig } from '../virtual-list-types';
export interface ItemProps {
    setRef: (element: HTMLElement & {
        $el: never;
    }) => void;
}
declare const Item: FunctionalComponent<ItemProps>;
export declare function renderChildren<T>(list: T[], startIndex: number, endIndex: number, setNodeRef: (item: T, element: HTMLElement & {
    $el: never;
}) => void, { getKey }: SharedConfig<T>, renderFunc: RenderFunc<T>): string | VNode[];
export default Item;
