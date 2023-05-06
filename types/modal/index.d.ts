import type { App } from 'vue';
import Modal from './src/modal';
export * from './src/modal-types';
export { Modal };
declare const _default: {
    title: string;
    category: string;
    status: string;
    install(app: App): void;
};
export default _default;
