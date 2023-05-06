import type { App } from 'vue';
import Countdown from './src/countdown';
export * from './src/countdown-types';
export { Countdown };
declare const _default: {
    title: string;
    category: string;
    status: string;
    install(app: App): void;
};
export default _default;
