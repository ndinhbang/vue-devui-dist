import type { ComputedRef } from 'vue';
import { NotificationProps, EmitEventFn, VoidFn } from './notification-types';
export declare function useNotification(props: NotificationProps): {
    classes: ComputedRef<Record<string, boolean>>;
};
export declare function useEvent(props: NotificationProps, emit: EmitEventFn): {
    interrupt: VoidFn;
    removeReset: VoidFn;
    close: VoidFn;
    handleDestroy: VoidFn;
};
