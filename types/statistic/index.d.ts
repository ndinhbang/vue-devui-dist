import type { App } from 'vue';
import Statistic from './src/statistic';
export * from './src/statistic-types';
export { Statistic };
declare const _default: {
    title: string;
    category: string;
    status: string;
    install(app: App): void;
};
export default _default;
