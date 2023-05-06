import type { App } from 'vue';
import Tree from './src/tree';
export * from './src/tree-types';
export * from './src/composables/use-tree-types';
export { Tree };
declare const _default: {
    title: string;
    category: string;
    status: string;
    install(app: App): void;
};
export default _default;
