import type { App } from 'vue';
import Checkbox from './src/checkbox';
import CheckboxGroup from './src/checkbox-group';
import CheckboxButton from './src/checkbox-button';
export * from './src/checkbox-types';
export { Checkbox, CheckboxGroup, CheckboxButton };
declare const _default: {
    title: string;
    category: string;
    status: string;
    install(app: App): void;
};
export default _default;
