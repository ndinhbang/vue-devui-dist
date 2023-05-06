import type { Ref } from 'vue';
import type { TState, DatePickerProps, DatePickerPopupProps } from './date-picker-types';
/**
 * Calendar 面板年月切换逻辑
 * @param state
 * @param index
 * @param pos
 * @param date
 */
export declare const handleCalendarSwitchState: (state: TState, index: number, pos: number, date: Date) => void;
/**
 * 格式化输入日期字符串
 * @param state
 * @param props
 * @returns
 */
export declare const formatValue: (state: TState, props: DatePickerProps) => string;
/**
 * 格式化placeholder显示
 * @param props
 * @returns
 */
export declare const formatPlaceholder: (props: DatePickerProps) => string;
/**
 * 输出日期选择结果
 * @param id
 * @param output
 */
export declare const handleValue: (id: string | undefined, output: string) => void;
/**
 * 获取绑定节点
 * @returns
 */
export declare const getAttachInputDom: (props: DatePickerPopupProps) => Element | null;
/**
 * 绑定弹出层场景，计算弹出层位置。
 * @param state
 * @param props
 * @param container
 * @returns
 */
export declare const handlePositionFactory: (state: {
    x?: string;
    y?: string;
    attachInputDom?: string;
    show?: boolean;
    st?: boolean;
}, props: DatePickerPopupProps, container: Ref<Element | null>) => () => void;
