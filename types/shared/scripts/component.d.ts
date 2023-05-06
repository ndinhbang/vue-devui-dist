import type { VNode } from 'vue';
/**
 * 创建组件实例对象
 * 返回的实例和调用 getCurrentComponent() 返回的一致
 * @param {*} Component
 */
export declare function createComponent(component: any, props: any, children?: any): VNode['component'];
/**
 * 销毁组件实例对象
 * @param {*} ComponnetInstance 通过createComponent方法得到的组件实例对象
 */
export declare function unmountComponent(ComponnetInstance: any): void;
