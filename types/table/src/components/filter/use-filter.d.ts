import { SetupContext } from 'vue';
import { UseFilterRender, UseFilterMultiple, UseFilterSingle } from './filter-types';
import { FilterConfig } from '../column/column-types';
export declare function useFilterRender(ctx: SetupContext): UseFilterRender;
export declare function useFilterMultiple(filterList: FilterConfig[], ctx: SetupContext): UseFilterMultiple;
export declare function useFilterSingle(ctx: SetupContext): UseFilterSingle;
