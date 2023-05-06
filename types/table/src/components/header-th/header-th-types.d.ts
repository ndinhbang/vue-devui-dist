import type { ComputedRef, Ref, ExtractPropTypes, PropType } from 'vue';
import type { FilterConfig, SortDirection, Column } from '../column/column-types';
export interface UseSort {
    direction: Ref<SortDirection>;
    sortClass: ComputedRef<Record<string, boolean>>;
    handleSort: (val: SortDirection) => void;
    clearSortOrder: () => void;
}
export interface UseFilter {
    filterClass: ComputedRef<Record<string, boolean>>;
    handleFilter: (val: FilterConfig | FilterConfig[]) => void;
}
export interface UseBaseRender {
    baseClass: ComputedRef<Record<string, boolean>>;
}
export interface UseDragColumnWidth {
    resizing: Ref<boolean>;
    dragClass: Ref<string>;
    onMousedown: (e: MouseEvent) => void;
}
export declare const headerThProps: {
    readonly column: {
        readonly type: PropType<Column>;
        readonly required: true;
    };
    readonly colspan: {
        readonly type: NumberConstructor;
    };
    readonly rowspan: {
        readonly type: NumberConstructor;
    };
};
export declare type HeaderThProps = ExtractPropTypes<typeof headerThProps>;
