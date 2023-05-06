import type { App } from 'vue';
import Collapse from './src/collapse';
import CollapseItem from './src/collapse-item';
export * from './src/collapse-types';
export { Collapse, CollapseItem };
declare const _default: {
    title: string;
    category: string;
    status: string;
    install(app: App): void;
};
export default _default;
