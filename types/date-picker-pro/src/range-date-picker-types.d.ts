import type { ComputedRef, ExtractPropTypes, PropType, Ref } from 'vue';
import type { Dayjs } from 'dayjs';
export declare const rangeDatePickerProProps: {
    readonly format: {
        type: StringConstructor;
    };
    readonly showTime: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly size: {
        type: PropType<import("../../input").InputSize>;
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
        readonly type: PropType<(string | Date)[]>;
        readonly default: readonly ["", ""];
    };
    readonly placeholder: {
        readonly type: PropType<string[]>;
        readonly default: readonly ["", ""];
    };
    readonly separator: {
        readonly type: StringConstructor;
        readonly default: "-";
    };
};
export declare type RangeDatePickerProProps = ExtractPropTypes<typeof rangeDatePickerProProps>;
export interface UseRangePickerProReturnType {
    originRef: Ref<HTMLElement | undefined>;
    startInputRef: Ref<HTMLElement | undefined>;
    endInputRef: Ref<HTMLElement | undefined>;
    overlayRef: Ref<HTMLElement | undefined>;
    isPanelShow: Ref<boolean>;
    placeholder: ComputedRef<string[]>;
    format: ComputedRef<string>;
    dateValue: ComputedRef<(Dayjs | undefined)[]>;
    displayDateValue: ComputedRef<string[]>;
    isMouseEnter: Ref<boolean>;
    showCloseIcon: ComputedRef<boolean>;
    focusType: Ref<string>;
    pickerDisabled: ComputedRef<boolean>;
    pickerSize: ComputedRef<'sm' | 'md' | 'lg'>;
    isValidateError: ComputedRef<boolean>;
    onFocus: (type: string) => void;
    focusHandler: (e: MouseEvent) => void;
    onSelectedDate: (date: Dayjs[], isConfirm?: boolean) => void;
    handlerClearTime: (e: MouseEvent) => void;
    onChangeRangeFocusType: (type: string) => void;
}
