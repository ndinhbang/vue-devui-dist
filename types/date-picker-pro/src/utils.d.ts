import type { Dayjs } from 'dayjs';
import { ArrType } from '../../time-picker/src/types';
export declare const formatDayjsToStr: (date: Dayjs | undefined, format: string, type: string) => string | null;
export declare const isDateEquals: (pre: Date | unknown, cur: Date | unknown) => boolean;
export declare const parserDate: (date: Date | string) => Dayjs | undefined;
export declare const resetActiveTimeData: (list: ArrType[]) => void;
