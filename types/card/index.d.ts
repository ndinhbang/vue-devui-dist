import type { App } from 'vue';
import Card from './src/card';
export * from './src/card-types';
export { Card };
declare const _default: {
    title: string;
    category: string;
    status: string;
    install(app: App): void;
};
export default _default;
