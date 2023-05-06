import type { App } from 'vue';
import MenuItem from './src/components/menu-item/menu-item';
import SubMenu from './src/components/sub-menu/sub-menu';
import Menu from './src/menu';
export { Menu, SubMenu, MenuItem };
declare const _default: {
    title: string;
    category: string;
    status: string;
    install(app: App): void;
};
export default _default;
