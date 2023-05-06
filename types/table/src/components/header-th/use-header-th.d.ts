import { Ref } from 'vue';
import { Column } from '../column/column-types';
import { UseSort, UseFilter, UseBaseRender, UseDragColumnWidth } from './header-th-types';
export declare function useBaseRender(column: Ref<Column>): UseBaseRender;
export declare function useSort(column: Ref<Column>): UseSort;
export declare function useFilter(column: Ref<Column>): UseFilter;
export declare function useDragColumnWidth(elementRef: Ref<HTMLElement>, column: Ref<Column>): UseDragColumnWidth;
