import type { ComputedRef } from 'vue';
import { LevelColumn } from '../../components/column/column-types';
export declare function useHeader(): {
    headerRows: ComputedRef<LevelColumn[][]>;
};
