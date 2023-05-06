/**
 *
 * @param originId
 * @description
 *    根据拖拽的id生成相应的阴影
 *    如何生成shadow？
 *    情况一： dragable   ->    drop without sortable
 *    情况二： anything   ->    drop without anything
 */
declare function createShadow(originId: string): HTMLElement;
/**
 *
 * @param el
 * @param originId
 * @param dragStart
 * @param drag
 * @param dragover
 * @param drop
 * @param shouldCreateShadow
 * @param dragFlag
 * @description
 *    改变拖拽元素相应的状态
 */
declare function changeDragState(el: string, originId: string, dragStart: string, drag: string, dragover: string, drop: string, shouldCreateShadow: string, dragFlag: string): void;
/**
 *
 * @param compareElement
 * @returns
 * @description
 *     计算可对比元素的高度
 */
declare function computeCompareElementHeight(compareElement: HTMLCollection): unknown;
/**
 *
 * @param sortDropArea
 * @param mouseObject
 *    1、首先确认可放置区域
 *    2、确保每个元素只生成一次shadow
 *    3、
 */
declare function createInsertSortableShadow(sortDropArea: unknown, mouseObject: unknown, originId: string): void;
/**
 *
 * @param dropAreaContainer
 * @param dragId
 * @param mouseObject
 * @description
 *    向sortable区域插入拖拽元素
 */
declare function insertDragElement(dropAreaContainer: HTMLCollection, dragId: string, mouseObject: MouseEvent): void;
/**
 *
 * @param dropSortArea
 * @description
 *    删除可排序区域中的shadow
 */
declare function deleteInsertedSortableShadow(dropSortArea: unknown): void;
/**
 *
 * @param mouse
 * @param sortableArea
 * @returns
 * @description 判断鼠标是否处于目标元素中
 */
declare function judgeMouseIsInSortableArea(mouse: MouseEvent, sortableArea: Element): boolean;
/**
 *
 * @param mouse
 * @param comparedArr
 * @description         同源交换位置
 */
declare function sameOriginExchangeElementPosition(mouse: Event, comparedArr: Array, dragId: string, dropArea: Element): void;
/**
 *
 * @param mouse         当前鼠标对象
 * @param dropAreaElements   放置区域的元素
 * @description
 */
declare function exchangeShadowPosition(mouse: Event, dropAreaElements: Array, dragId: string, dropArea: Element): void;
export { createShadow, changeDragState, createInsertSortableShadow, deleteInsertedSortableShadow, computeCompareElementHeight, insertDragElement, judgeMouseIsInSortableArea, exchangeShadowPosition, sameOriginExchangeElementPosition };
