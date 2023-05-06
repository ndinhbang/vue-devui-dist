import type { ComputedRef, ExtractPropTypes, PropType, Ref } from 'vue';
import type { Dayjs } from 'dayjs';
import { ArrType } from '../../time-picker/src/types';
import type { InputSize } from '../../input/src/input-types';
export declare const datePickerProCommonProps: {
    format: {
        type: StringConstructor;
    };
    showTime: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: PropType<InputSize>;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    calendarRange: {
        type: PropType<number[]>;
        default: number[];
    };
    limitDateRange: {
        type: PropType<Date[]>;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
};
export declare const datePickerProProps: {
    readonly format: {
        type: StringConstructor;
    };
    readonly showTime: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly size: {
        type: PropType<InputSize>;
        default: string;
    };
    readonly disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly calendarRange: {
        type: PropType<number[]>;
        default: number[];
    };
    readonly limitDateRange: {
        type: PropType<Date[]>;
    };
    readonly type: {
        type: StringConstructor;
        default: string;
    };
    readonly modelValue: {
        readonly type: PropType<string | Date>;
        readonly default: "";
    };
    readonly placeholder: {
        readonly type: StringConstructor;
        readonly default: "";
    };
};
export declare type DatePickerProProps = ExtractPropTypes<typeof datePickerProProps>;
export interface UseDatePickerProReturnType {
    originRef: Ref<HTMLElement | undefined>;
    inputRef: Ref<HTMLElement | undefined>;
    overlayRef: Ref<HTMLElement | undefined>;
    isPanelShow: Ref<boolean>;
    placeholder: ComputedRef<string>;
    format: ComputedRef<string>;
    dateValue: ComputedRef<Dayjs | undefined>;
    displayDateValue: ComputedRef<string>;
    isMouseEnter: Ref<boolean>;
    showCloseIcon: ComputedRef<boolean>;
    pickerDisabled: ComputedRef<boolean>;
    pickerSize: ComputedRef<'sm' | 'md' | 'lg'>;
    isValidateError: ComputedRef<boolean>;
    onFocus: (e: MouseEvent) => void;
    onSelectedDate: (date: Dayjs, isConfirm?: boolean) => void;
    handlerClearTime: (e: MouseEvent) => void;
}
export interface CalendarDateItem {
    day: string;
    date: Date;
    inMonth: boolean;
    isToday: boolean;
    isActive?: boolean;
}
export interface YearAndMonthItem {
    year: number;
    month?: number;
    isMonth?: boolean;
    active?: boolean;
    displayWeeks?: CalendarDateItem[][];
}
export interface UseDatePickerReturnType {
    calendarPanelRef: Ref<HTMLElement | undefined>;
    timeData: Ref<string>;
    onSelectedDate: (date: Dayjs) => void;
    handlerConfirm: () => void;
    handlerSelectedTime: (time: string) => void;
    onChangeRangeFocusType: (type: string) => void;
}
export interface UseCalendarPanelReturnType {
    yearScrollRef: Ref<HTMLElement | undefined>;
    monthScrollRef: Ref<HTMLElement | undefined>;
    yearAndMonthList: Ref<YearAndMonthItem[]>;
    allMonthList: Ref<YearAndMonthItem[]>;
    isListCollapse: Ref<boolean>;
    handlerSelectDate: (day: CalendarDateItem) => void;
    handlerYearCollapse: (date?: Date) => void;
    handlerClickMonth: (year: number, month: number | undefined) => void;
    handleScrollMonthList: (e: UIEvent) => void;
    isDateSelected: (date: Date) => boolean;
    isStartDate: (date: Date) => boolean;
    isInRangeDate: (date: Date) => boolean;
    isEndDate: (date: Date) => boolean;
    isDisabled: (date: Date) => boolean;
}
export declare const datePickerProPanelProps: {
    readonly format: {
        type: StringConstructor;
    };
    readonly showTime: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly size: {
        type: PropType<InputSize>;
        default: string;
    };
    readonly disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly calendarRange: {
        type: PropType<number[]>;
        default: number[];
    };
    readonly limitDateRange: {
        type: PropType<Date[]>;
    };
    readonly type: {
        type: StringConstructor;
        default: string;
    };
    readonly visible: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly dateValue: {
        readonly type: PropType<Dayjs | (Dayjs | undefined)[] | undefined>;
    };
    readonly isRangeType: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly focusType: {
        readonly type: StringConstructor;
        readonly default: "start";
    };
};
export declare type DatePickerProPanelProps = ExtractPropTypes<typeof datePickerProPanelProps>;
export interface TimePickerItem {
    activeHour: Ref<string>;
    activeMinute: Ref<string>;
    activeSecond: Ref<string>;
}
export declare const timerPickerPanelProps: {
    readonly visible: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly bindData: {
        readonly type: StringConstructor;
        readonly default: "";
    };
};
export declare type TimerPickerPanelProps = ExtractPropTypes<typeof timerPickerPanelProps>;
export interface UseTimePickerPanelReturnType {
    timeListDom: Ref<HTMLElement | undefined>;
    hourList: Array<ArrType>;
    minuteList: Array<ArrType>;
    secondList: Array<ArrType>;
    handlerTimeSelected: (date: TimePickerItem) => void;
}
export interface UseYearCalendarPanelReturnType {
    yarListScrollRef: Ref<HTMLElement | undefined>;
    yearList: Ref<number[][]>;
    getYearItemCls: (year: number) => Record<string, boolean>;
    handlerSelectYear: (year: number) => void;
}
export interface UseCalendarSelectedReturnType {
    today: Ref<Date>;
    calendarRange: Ref<number[]>;
    selectDate: Ref<Dayjs | undefined>;
    rangeSelectDate: Ref<(Dayjs | undefined)[]>;
    minDate: ComputedRef<Date>;
    maxDate: ComputedRef<Date>;
    fixRangeDate: () => void;
    getToDate: (dateValue: Dayjs | undefined | (Dayjs | undefined)[]) => Dayjs | undefined;
    emitSelectedDate: () => void;
    isStartDate: (date: Date) => boolean;
    isInRangeDate: (date: Date) => boolean;
    isEndDate: (date: Date) => boolean;
}
export interface UseMonthCalendarPanelReturnType {
    yearScrollRef: Ref<HTMLElement | undefined>;
    monthScrollRef: Ref<HTMLElement | undefined>;
    yearList: Ref<YearAndMonthItem[]>;
    monthList: number[][];
    handlerSelectYear: (year: number) => void;
    handlerMonthScroll: (e: MouseEvent) => void;
    getMonthItemCls: (year: number, month: number) => Record<string, boolean>;
    handlerSelectMonth: (year: number, month: number) => void;
}
