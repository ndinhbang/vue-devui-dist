import type { Ref, ShallowRef } from 'vue';
import { GetKey, CacheMap } from '../virtual-list-types';
export default function useHeights<T>(mergedData: ShallowRef<unknown[]>, getKey: GetKey<T>): [(item: T, instance: HTMLElement & {
    $el: never;
}) => void, () => void, CacheMap, Ref<symbol>];
