/**
 * 多选模式
 */
import type { CascaderItem, UpdateStatusCallback, CascaderModelValue } from '../src/cascader-types';
/**
 * 初始化选中项，将选中的数组集合置为空
 * @param tagList 前被选中的tagList集合
 */
export declare const initTagList: (tagList: CascaderItem[]) => void;
/**
 * 添加选中项
 * @param tagList 当前被选中的tagList集合
 * @param singleItem 当前选中项
 *
 */
export declare const multipleAddTag: (tagList: CascaderItem[], singleItem?: CascaderItem | undefined) => void;
/**
 * 删除选中项
 * @param tagList 前被选中的tagList集合
 * @param singleItem 当前选中项
 *
 */
export declare const multipleDeleteTag: (tagList: CascaderItem[], singleItem: CascaderItem) => void;
/**
 * 多选模式初始化选中的节点
 * @param targetValues 多选模式下的value数组
 * @param rootNode 选项的第一列
 * @param tagList 选中的tag集合
 */
export declare const initMultipleCascaderItem: (targetValues: CascaderModelValue, rootColumn: CascaderItem[], tagList: CascaderItem[]) => void;
export declare const getMultiModelValues: (tagList: CascaderItem[]) => CascaderModelValue[];
export declare const updateCheckOptionStatus: (tagList: CascaderItem[]) => UpdateStatusCallback;
