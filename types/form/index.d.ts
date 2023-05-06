import type { App } from 'vue';
import Form from './src/form';
import FormItem from './src/components/form-item/form-item';
import FormOperation from './src/components/form-operation/form-operation';
export { Form, FormItem, FormOperation };
export * from './src/form-types';
export * from './src/components/form-item/form-item-types';
declare const _default: {
    title: string;
    category: string;
    status: string;
    install(app: App): void;
};
export default _default;
