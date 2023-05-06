import type { App } from 'vue';
import StepsGuide from './src/steps-guide';
import StepsGuideDirective from './src/steps-guide-directive';
export * from './src/steps-guide-types';
export { StepsGuide, StepsGuideDirective };
declare const _default: {
    title: string;
    category: string;
    status: string;
    install(app: App): void;
};
export default _default;
