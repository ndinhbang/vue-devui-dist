import { Ref, SetupContext } from 'vue';
import { ArrType, UsePopupLineFn } from '../../../types';
declare const usePopupLine: (hourListRef: Array<ArrType>, minuteListRef: Array<ArrType>, secondListRef: Array<ArrType>, minTime: string, maxTime: string, format: string, itemHeight: number, timeListDom: Ref, ctx: SetupContext) => UsePopupLineFn;
export { usePopupLine };
