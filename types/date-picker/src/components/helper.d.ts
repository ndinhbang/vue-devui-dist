import type { TDateCell, TDatePanelDataProps, TDatePanelProps } from './types';
export declare const getDateKey: (date: Date) => string;
export declare const cellClassName: (props: TDatePanelDataProps, day: TDateCell, base?: string) => string;
export declare const trigEvent: (props: TDatePanelProps, day: TDateCell) => void;
export declare const handleDateEnter: (props: TDatePanelProps, day: TDateCell) => void;
