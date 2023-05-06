import type { App } from 'vue';
import ImagePreviewDirective from './src/image-preview-directive';
import ImagePreviewService from './src/image-preview-service';
export * from './src/image-preview-types';
export { ImagePreviewDirective, ImagePreviewService };
declare const _default: {
    title: string;
    category: string;
    status: string;
    install(app: App): void;
};
export default _default;
