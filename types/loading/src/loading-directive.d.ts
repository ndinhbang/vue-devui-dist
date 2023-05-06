import type { VNode } from 'vue';
import { BindingType, TargetHTMLElement } from './loading-types';
declare const LoadingDirective: {
    mounted: (el: TargetHTMLElement, binding: BindingType, vnode: VNode) => void;
    updated: (el: TargetHTMLElement, binding: BindingType, vnode: VNode) => void;
};
export default LoadingDirective;
