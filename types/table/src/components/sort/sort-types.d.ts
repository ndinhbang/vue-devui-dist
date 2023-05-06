import type { ExtractPropTypes, PropType } from 'vue';
import { SortDirection } from '../column/column-types';
export declare const sortProps: {
    sortDirection: {
        type: PropType<SortDirection>;
        default: string;
    };
};
export declare type SortProps = ExtractPropTypes<typeof sortProps>;
