export declare type TDateCell = {
    date: Date;
    current: -1 | 0 | 1;
};
export declare type TDatePanelMode = 'month' | 'year';
export declare type TDatePanelType = 'select' | 'range';
export declare type TEventCallback = (date: Date, position: number) => void;
export declare type TDateConfig = {
    type?: TDatePanelType;
    mode?: TDatePanelMode;
    current: Date;
    showTime: boolean;
    dateMin?: Date;
    dateMax?: Date;
};
export declare type TDateSelectingBase = {
    dateStart?: Date;
    dateEnd?: Date;
    dateHover?: Date;
};
export declare type TDateToolbarEventProps = {
    onPreviousYear?: TEventCallback;
    onPreviousMonth?: TEventCallback;
    onNextMonth?: TEventCallback;
    onNextYear?: TEventCallback;
};
export declare type TDateToolbarDataProps = TDateConfig & {
    pos?: number;
    compare?: Date;
};
export declare type TDateToolbarProps = TDateToolbarDataProps & TDateToolbarEventProps;
export declare type TDatePanelEventProps = {
    onSelected?: TEventCallback;
    onReset?: TEventCallback;
    onSelectStart?: TEventCallback;
    onSelectEnd?: TEventCallback;
    onSelecting?: TEventCallback;
    onToday?: TEventCallback;
    onChange?: (type: TDatePanelType, config: TDateSelectingBase) => void;
} & TDateToolbarEventProps;
export declare type TDatePanelDataProps = TDateToolbarDataProps & TDateSelectingBase;
export declare type TDatePanelProps = {
    showToday?: boolean;
} & TDatePanelDataProps & TDatePanelEventProps;
export declare type TProps = ({
    type: 'select';
} | {
    type: 'range';
    next: Date;
}) & TDateConfig & TDateSelectingBase & TDatePanelEventProps;
export declare type TIconSvgProps = {
    color?: string;
    rotate?: number;
};
export declare type TIconSvg = <T>(props: TIconSvgProps) => T;
export declare type TCalendarToolbarItemProps = {
    disabled?: boolean;
    rotate?: number;
    cb?: <T>(...args: T[]) => void;
    pos: number;
    date: Date;
    button: TIconSvg;
};
