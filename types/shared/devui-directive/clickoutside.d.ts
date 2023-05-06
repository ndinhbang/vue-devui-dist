/**
 * v-clickoutside
 * @desc 点击元素外面才会触发的事件
 * @example
 * <div v-clickoutside="handleClose">
 */
declare const clickoutsideDirective: {
    beforeMount: (el: HTMLElement, binding: Record<string, any>, vnode: any) => void;
    updated: (el: HTMLElement, binding: Record<string, any>, vnode: any) => void;
    unmounted: (el: HTMLElement) => void;
};
export default clickoutsideDirective;
