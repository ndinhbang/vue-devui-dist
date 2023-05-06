import { ArrType, timeDataType } from './types';
/**
 * 初始化数据
 * @param type 类型（ 时，分，秒 ）
 * @returns Array<time>
 */
export declare function initializeTimeData(type: timeDataType): ArrType[];
/**
 * 初始化 最小值 最大值
 * @param hourList
 * @param minuteList
 * @param maxTime
 * @param minTime
 * @param farmat
 */
export declare const setTimeAstrict: (hourList: Array<ArrType>, minuteList: Array<ArrType>, secondList: Array<ArrType>, minTime: string, maxTime: string, format: string) => void;
