import type { App } from 'vue';
import Breadcrumb from './src/breadcrumb';
export * from './src/breadcrumb-types';
export * from './src/breadcrumb-item-types';
export { Breadcrumb };
declare const _default: {
    title: string;
    category: string;
    status: string;
    install(app: App): void;
};
export default _default;
