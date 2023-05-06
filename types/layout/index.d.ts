import type { App } from 'vue';
import Layout from './src/layout';
import Content from './src/content';
import Header from './src/header';
import Footer from './src/footer';
import Aside from './src/aside';
export { Layout, Content, Header, Footer, Aside };
declare const _default: {
    title: string;
    category: string;
    status: string;
    install(app: App): void;
};
export default _default;
