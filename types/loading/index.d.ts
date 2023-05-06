import { App } from 'vue';
import LoadingService from './src/loading-service';
import LoadingDirective from './src/loading-directive';
export * from './src/loading-types';
export { LoadingService, LoadingDirective };
declare const _default: {
    title: string;
    category: string;
    status: string;
    install(app: App): void;
};
export default _default;
