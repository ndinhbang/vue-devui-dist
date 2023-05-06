import type { App } from 'vue';
import Dropdown from './src/dropdown';
import DropdownMenu from './src/dropdown-menu';
export * from './src/dropdown-menu-types';
export { Dropdown, DropdownMenu };
declare const _default: {
    title: string;
    category: string;
    status: string;
    install(app: App): void;
};
export default _default;
