import type { VNode, ComponentInternalInstance } from 'vue';
import { LoadingOptions } from './loading-types';
declare type IMargeVNodeComponent = VNode['component'] & {
    loadingInstance?: ComponentInternalInstance['proxy'];
} | null;
declare const loading: {
    open(options?: LoadingOptions): IMargeVNodeComponent;
};
export default loading;
