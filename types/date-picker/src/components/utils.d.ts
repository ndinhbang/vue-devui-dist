import { TDateCell } from './types';
export declare const getMonthWeeklyDays: (date?: Date) => TDateCell[][];
export declare const WEEK_DAYS: string[];
export declare const invokeCallback: <T>(cb: T, ...args: unknown[]) => void;
/**
 * a - b 的月数
 */
export declare const subDateMonth: (a: Date, b: Date) => number;
/**
 * a - b 的天数
 * @param a
 * @param b
 * @returns
 */
export declare const subDateDay: (a: Date, b: Date) => number;
/**
* 比较日期单位
* @param small 相对早的日期
* @param big 相对晚的日期
* @param mode 比较单位
* @param min 不能小于这个值
* @returns
*/
export declare const compareDate: (small: Date | undefined, big: Date | undefined, mode: 'year' | 'month', min: number) => boolean;
export declare const parseTime: (str?: string | undefined) => [number, number, number, number];
declare type TDateCounterType = 'd' | 'm' | 'y';
export declare const dateCounter: (date: Date, type: TDateCounterType) => number;
export declare const compareDateSort: (d1: Date, d2: Date, type?: TDateCounterType) => number;
export declare const borderDateFactory: (factor: (d1: Date, d2: Date) => Date) => (...ds: Date[]) => Date;
export declare const getMinDate: (...ds: Date[]) => Date;
export declare const getMaxDate: (...ds: Date[]) => Date;
/**
 * d 是否在 [left, right] 区间
 * @param date 日期
 * @param left 最小日期
 * @param right 最大日期
 * @returns boolean
 */
export declare const betweenDate: (date: Date, left: Date, right: Date) => boolean;
export declare const parseDate: (str?: string | undefined) => Date | undefined;
export {};
