import type { App } from 'vue';
import Table from './src/table';
import Column from './src/components/column/column';
export * from './src/table-types';
export { Table, Column };
declare const _default: {
    title: string;
    category: string;
    status: string;
    install(app: App): void;
};
export default _default;
