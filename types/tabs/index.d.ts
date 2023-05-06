import type { App } from 'vue';
import Tabs from './src/tabs';
import Tab from './src/components/tab/tab';
export * from './src/tabs-types';
export { Tabs, Tab };
declare const _default: {
    title: string;
    category: string;
    status: string;
    install(app: App): void;
};
export default _default;
