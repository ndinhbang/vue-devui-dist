import type { App } from 'vue';
import Steps from './src/steps';
import Step from './src/step';
export * from './src/steps-types';
export * from './src/step-types';
export { Steps, Step };
declare const _default: {
    title: string;
    category: string;
    status: string;
    install(app: App): void;
};
export default _default;
