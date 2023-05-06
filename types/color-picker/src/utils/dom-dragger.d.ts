export declare const isObject: (val: unknown) => val is Record<never, never>;
export declare const isString: (val: unknown) => val is string;
export declare const enum NodeType {
    ELEMENT_NODE = 1,
    ATTRIBUTE_NODE = 2,
    TEXT_NODE = 3,
    CDATA_SECTION_NODE = 4,
    ENTITY_REFERENCE_NODE = 5,
    COMMENT_NODE = 6,
    PROCESSING_INSTRUCTION_NODE = 7,
    DOCUMENT_NODE = 9
}
export interface DragEventOptions {
    drag?: (event: Event) => void;
    start?: (event: Event) => void;
    end?: (event: Event) => void;
}
export declare type ScrollElement = Element | Window;
export declare class DOMUtils {
    static isWindow(val: unknown): val is Window;
    /**
     * 添加事件
     *
     *
     * @param element 如果为null将不会添加事件
     * @param event
     * @param handler
     * @param options
     */
    static addEventListener(element: HTMLElement | Document | Window | null, event: string, handler: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    /**
     * 移除事件
     *
     * @param element 如果为null将不会移除事件
     * @param event
     * @param handler
     * @param options
     */
    static removeEventListener(element: HTMLElement | Document | Window | null, event: string, handler: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    /**
     * 触发拖拽事件
     *
     * @param element
     * @param options
     */
    static triggerDragEvent(element: HTMLElement, options: DragEventOptions): void;
    static getBoundingClientRect(element: HTMLElement): DOMRect | null;
    /**
     * 判断是否存在className样式
     *
     * @param element
     * @param className
     */
    static hasClass(element: HTMLElement, className: string): boolean;
    /**
     * 添加样式
     *
     * @param element
     * @param className
     */
    static addClass(element: HTMLElement, className: string): void;
    /**
     * 移除样式
     *
     * @param element
     * @param className
     */
    static removeClass(element: HTMLElement, className: string): void;
    /**
     * 切换样式
     *
     * @param element
     * @param className
     * @param force
     */
    static toggleClass(element: HTMLElement, className: string, force?: boolean): void;
    /**
     * 替换样式
     *
     * @param element
     * @param oldClassName
     * @param newClassName
     */
    static replaceClass(element: HTMLElement, oldClassName: string, newClassName: string): void;
    static getScrollTop(el: ScrollElement): number;
    static setScrollTop(el: ScrollElement, value: number): void;
    static getRootScrollTop(): number;
    static setRootScrollTop(value: number): void;
    static getElementTop(el: ScrollElement, scroller?: HTMLElement): number;
    static getVisibleHeight(el: ScrollElement): number;
    static isHidden(el: HTMLElement): boolean;
    /**
     * 触发事件
     *
     * @param el
     * @param type
     */
    static triggerEvent(el: Element, type: string): void;
    /**
     * 计算相对于中心点的旋转角度
     * @param element
     * @param event
     */
    static calcAngle(element: HTMLElement, event: MouseEvent): number;
    /**
     * querySelector
     *
     * @param selectors
     * @param parentElement
     */
    static querySelector<E extends Element = Element>(selectors: string, parentElement?: HTMLElement): E | null;
}
