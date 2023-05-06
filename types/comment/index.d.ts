import type { App } from 'vue';
import Comment from './src/comment';
export * from './src/comment-types';
export { Comment };
declare const _default: {
    title: string;
    category: string;
    status: string;
    install(app: App): void;
};
export default _default;
