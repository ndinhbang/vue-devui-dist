import type { ExtractPropTypes, PropType } from 'vue';
export declare type TState = {
    range?: boolean;
    current?: Date;
    next?: Date;
    start?: Date;
    end?: Date;
    hover?: Date;
    show?: boolean;
    input?: string;
    value?: string;
    placeholder?: string;
};
export declare const datePickerProps: {
    readonly selectedDateChange: {
        readonly type: PropType<(...args: unknown[]) => void>;
    };
    readonly autoClose: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly range: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly showTime: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly format: {
        readonly type: StringConstructor;
        readonly default: "y/MM/dd";
    };
    readonly rangeSpliter: {
        readonly type: StringConstructor;
        readonly default: "-";
    };
    readonly attachInputDom: {
        readonly type: StringConstructor;
    };
    readonly dateMin: {
        readonly type: StringConstructor;
    };
    readonly dateMax: {
        readonly type: StringConstructor;
    };
};
export declare const datePickerPopupProps: {
    readonly attach: {
        readonly type: StringConstructor;
    };
    readonly onBinding: {
        readonly type: PropType<(...args: unknown[]) => void>;
    };
    readonly onClosed: {
        readonly type: PropType<(...args: unknown[]) => void>;
    };
    readonly onOpen: {
        readonly type: PropType<(...args: unknown[]) => void>;
    };
    readonly show: {
        readonly type: BooleanConstructor;
    };
};
export declare const timePickerProps: {
    readonly time: {
        readonly type: DateConstructor;
    };
};
export declare const verticalSliderProps: {
    readonly size: {
        readonly type: NumberConstructor;
        readonly default: 26;
    };
    readonly items: {
        readonly type: ArrayConstructor;
    };
    readonly selectedIndex: {
        readonly type: NumberConstructor;
    };
    readonly className: {
        readonly type: StringConstructor;
    };
    readonly itemClassNormal: {
        readonly type: StringConstructor;
    };
    readonly itemClassSelected: {
        readonly type: StringConstructor;
    };
    readonly onChange: {
        readonly type: PropType<(...args: unknown[]) => void>;
    };
};
export declare type DatePickerProps = ExtractPropTypes<typeof datePickerProps>;
export declare type DatePickerPopupProps = ExtractPropTypes<typeof datePickerPopupProps>;
export declare type TimePickerProps = ExtractPropTypes<typeof timePickerProps>;
export declare type VerticalSliderProps = ExtractPropTypes<typeof verticalSliderProps>;
