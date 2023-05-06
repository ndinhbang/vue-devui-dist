import { TreeData, TreeItem } from '../src/tree-select-types';
export declare const nodeMap: Map<string, TreeItem>;
export declare function attributeExtension(data: TreeData): any;
/**
 * 动态获取class字符串
 * @param classStr 是一个字符串，固定的class名
 * @param classOpt 是一个对象，key表示class名，value为布尔值，true则添加，否则不添加
 * @returns 最终的class字符串
 */
export declare function className(classStr: string, classOpt?: {
    [key: string]: boolean;
}): string;
