/**
 * 单选模式
 * */
import { Ref } from 'vue';
import { CascaderItem, CascaderValueType } from '../src/cascader-types';
/**
 * 初始化打开时的视图选中状态
 * 通过value集合获取下标集合
 * @param values 选中的value集合
 * @param curColumn 当前列
 * @param index values数组的起始项，最开始为0
 * @param activeIndexs 当前渲染到视图列的下标集合
 */
export declare const initActiveIndexs: (values: CascaderValueType, curColumn: CascaderItem[], index: number, activeIndexs: number[]) => void;
/**
 * 缓存输入框内容
 * @param inputValueCache 缓存的输入框内容，当最终确定时输出内容
 */
export declare const initSingleIptValue: (inputValueCache: Ref<string> | undefined) => void;
/**
 * 单选选中
 * @param ulIndex 当前操作的列
 * @param valueCache 缓存的当前操作列的value集合
 * @param cascaderItem 当前操作项
 */
export declare const singleChoose: (ulIndex: number, valueCache: CascaderValueType, cascaderItem: CascaderItem) => void;
