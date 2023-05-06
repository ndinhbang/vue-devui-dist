import { ComponentPublicInstance } from '@vue/runtime-core';
/**
 *
 * @param {any} origin
 * @returns
 */
export declare function isComponent(target: any): target is ComponentPublicInstance;
/**
 * 提取 Vue Intance 中的元素，如果本身就是元素，直接返回。
 * @param {any} element
 * @returns {Element | null}
 */
export declare function getElement(element: Element | ComponentPublicInstance | null): Element | null;
