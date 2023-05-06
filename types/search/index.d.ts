import type { App } from 'vue';
import Search from './src/search';
export * from './src/search-types';
export { Search };
declare const _default: {
    title: string;
    category: string;
    status: string;
    install(app: App): void;
};
export default _default;
