import type { App } from 'vue';
import { FixedOverlay } from './src/fixed-overlay';
import { FlexibleOverlay } from './src/flexible-overlay';
export * from './src/fixed-overlay/fixed-overlay-types';
export * from './src/flexible-overlay/flexible-overlay-types';
export { FlexibleOverlay, FixedOverlay };
declare const _default: {
    title: string;
    category: string;
    status: string;
    install(app: App): void;
};
export default _default;
