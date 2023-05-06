import type { App } from 'vue';
import Row from './src/row';
import Col from './src/col';
export * from './src/grid-types';
export { Row, Col };
declare const _default: {
    title: string;
    category: string;
    status: string;
    install(app: App): void;
};
export default _default;
