import type { App } from 'vue';
import Button from './src/button';
import ButtonGroup from './src/button-group';
export * from './src/button-types';
export { Button, ButtonGroup };
declare const _default: {
    title: string;
    category: string;
    status: string;
    install(app: App): void;
};
export default _default;
