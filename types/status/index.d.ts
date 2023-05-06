import type { App } from 'vue';
import Status from './src/status';
export * from './src/status-types';
export { Status };
declare const _default: {
    title: string;
    category: string;
    status: string;
    deprecated: {
        value: boolean;
        reason: string;
    };
    install(app: App): void;
};
export default _default;
