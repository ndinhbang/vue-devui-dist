import type { App } from 'vue';
import Timeline from './src/timeline';
import TimelineItem from './src/components/timeline-item';
export * from './src/timeline-types';
export { Timeline, TimelineItem };
declare const _default: {
    title: string;
    category: string;
    status: string;
    install(app: App): void;
};
export default _default;
