/**
 * 判断 DOM 中的元素是否含有某个类
 * @param el 元素
 * @param className 类名
 * @returns
 */
export declare function hasClass(el: HTMLElement, className: string): boolean;
/**
 * 向 DOM 中的元素添加一个类
 * @param el 元素
 * @param className 类名
 */
export declare function addClass(el: HTMLElement, className: string): void;
/**
 * 从 DOM 中的元素移除一个类
 * @param el 元素
 * @param className 类名
 */
export declare function removeClass(el: HTMLElement, className: string): void;
