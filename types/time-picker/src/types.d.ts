import { ComputedRef, Ref } from 'vue';
export declare type timeType = 'hh' | 'HH' | 'mm' | 'MM' | 'ss' | 'SS';
export declare type TimeObj = {
    time: string;
    type?: timeType;
};
export declare type timeDataType = 'hour' | 'minute' | 'second';
export declare type ArrType = {
    type: timeDataType;
    isActive: boolean;
    isDisabled: boolean;
    time: string;
    flag: string;
};
export interface TimeListItem {
    hh: ArrType[];
    mm: ArrType[];
    ss: ArrType[];
}
export interface popupTimeObj {
    activeHour: Ref<string>;
    activeMinute: Ref<string>;
    activeSecond: Ref<string>;
}
export declare type sizeType = 'lg' | 'md' | 'sm';
export declare type UseTimerPickerFn = {
    showPopup: Ref<boolean>;
    trueTimeValue: ComputedRef<string>;
    timePickerValue: Ref<string>;
    inputDom: Ref;
    overlayRef: Ref<HTMLElement | undefined>;
    timePopupDom: Ref<HTMLElement | undefined>;
    showClearIcon: Ref<boolean>;
    firsthandActiveTime: Ref<string>;
    vModeValue: Ref<string>;
    clickVerifyFun: (e: MouseEvent) => void;
    isOutOpen: () => void;
    clearAll: (e: MouseEvent) => void;
    chooseTime: (slotTime: TimeObj) => void;
    changeTimeData: ({ activeHour, activeMinute, activeSecond }: popupTimeObj) => void;
};
export declare type UsePopupLineFn = {
    activeTime: Ref<string>;
    activeHour: Ref<string>;
    activeMinute: Ref<string>;
    activeSecond: Ref<string>;
    activeTimeFun: (e: MouseEvent, item: ArrType, index: number) => void;
    resetTimeValue: (time: string) => void;
    getNewTime: () => void;
    resetScrollTop: () => void;
};
export declare type UseTimeScroll = {
    scrollThumbDom: Ref<HTMLElement | null>;
    scrollTrackDom: Ref<HTMLElement | null>;
    scrollContentDom: Ref<HTMLElement | null>;
    scrollBoxDom: Ref<HTMLElement | null>;
    isDown: Ref<boolean>;
    getScrollHeight: () => void;
    setVirtualScroll: () => void;
    clickTrackFun: (e: MouseEvent) => void;
    mouseDownThum: () => void;
    mouseOutThum: (e: MouseEvent) => void;
    thumbMouseMove: (e: MouseEvent & {
        path?: string;
    }) => void;
    getScrollWidth: () => number;
};
