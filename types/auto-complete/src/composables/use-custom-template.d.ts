import { Ref, SetupContext } from 'vue';
import { SourceItemObj } from '../auto-complete-types';
declare type CustomRenderSoltsType = {
    itemTemplate?: (item: string | SourceItemObj, index: number) => unknown;
    noResultItemTemplate?: () => unknown;
    searchingTemplate?: () => unknown;
};
export default function useCustomTemplate(ctx: SetupContext, modelValue: Ref<string>): {
    customRenderSolts: () => CustomRenderSoltsType;
};
export {};
