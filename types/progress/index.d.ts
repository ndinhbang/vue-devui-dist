import type { App } from 'vue';
import Progress from './src/progress';
export * from './src/progress-types';
export { Progress };
declare const _default: {
    title: string;
    category: string;
    status: string;
    install(app: App): void;
};
export default _default;
