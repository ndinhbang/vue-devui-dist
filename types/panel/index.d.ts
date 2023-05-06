import type { App } from 'vue';
import Panel from './src/panel';
import PanelHeader from './src/components/panel-header';
import PanelBody from './src/components/panel-body';
import PanelFooter from './src/components/panel-footer';
export * from './src/panel-types';
export { Panel, PanelHeader, PanelBody, PanelFooter };
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
