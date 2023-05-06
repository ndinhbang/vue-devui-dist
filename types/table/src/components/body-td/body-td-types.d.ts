import type { ComputedRef, ExtractPropTypes, PropType, Ref, TdHTMLAttributes } from 'vue';
import { Column } from '../column/column-types';
export declare const bodyTdProps: {
    column: {
        type: PropType<Column>;
        default: () => unknown;
    };
    row: {
        type: PropType<Record<string, unknown>>;
        default: () => Record<string, unknown>;
    };
    rowspan: {
        type: NumberConstructor;
    };
    colspan: {
        type: NumberConstructor;
    };
    index: {
        type: NumberConstructor;
        default: number;
    };
};
export declare type BodyTdProps = ExtractPropTypes<typeof bodyTdProps> & TdHTMLAttributes;
export interface UseBodyTd {
    isShowTooltip: Ref<boolean>;
    tooltipContent: Ref<string>;
    tdRef: Ref<HTMLElement | undefined>;
    cellMode: ComputedRef<string>;
    onCellClick: () => void;
}
