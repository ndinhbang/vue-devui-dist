import type { App } from 'vue';
import Alert from './src/alert';
export * from './src/alert-types';
export { Alert };
declare const _default: {
    title: string;
    category: string;
    status: string;
    install(app: App): void;
};
export default _default;
