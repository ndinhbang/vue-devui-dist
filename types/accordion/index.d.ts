import type { App } from 'vue';
import Accordion from './src/accordion';
export { Accordion };
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
