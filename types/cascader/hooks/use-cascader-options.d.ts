/**
 * 处理传入options数据
 */
import { OptionsCallback } from '../src/cascader-types';
export declare const optionsHandles: (cascaderOptions?: [{
    [x: string]: unknown;
    label: string;
    value: string | number;
    isLeaf?: boolean | undefined;
    children?: any[] | undefined;
    checked?: boolean | undefined;
    halfChecked?: boolean | undefined;
    disabled?: boolean | undefined;
    active?: boolean | undefined;
    _loading?: boolean | undefined;
    icon?: string | undefined;
}[]] | undefined) => OptionsCallback;
