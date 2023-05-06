import type { App } from 'vue';
import Skeleton from './src/skeleton';
import SkeletonItem from './src/components/skeleton-item';
export * from './src/skeleton-types';
export * from './src/components/skeleton-item-types';
export { Skeleton, SkeletonItem };
declare const _default: {
    title: string;
    category: string;
    status: string;
    install(app: App): void;
};
export default _default;
