import type { App } from 'vue';
import Message from './src/message-service';
export * from './src/message-types';
export { Message };
declare const _default: {
    title: string;
    category: string;
    status: string;
    install(app: App): void;
};
export default _default;
