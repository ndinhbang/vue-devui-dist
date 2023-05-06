import { ComputedRef } from 'vue';
import { ScreenSizes, ColPropsBaseClass } from '../grid-types';
export declare function useColClassNames(props: ColPropsBaseClass): ComputedRef<Record<string, boolean>>;
export declare function useSize(colSizes: ScreenSizes): ComputedRef<string>;
