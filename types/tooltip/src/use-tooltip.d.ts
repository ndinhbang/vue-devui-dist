import type { Ref } from 'vue';
import { TooltipProps, BasePlacement, UseTooltipFn } from './tooltip-types';
export declare const transformOriginMap: Record<BasePlacement, string>;
export declare function useTooltip(origin: Ref, props: TooltipProps): UseTooltipFn;
