import type { App } from 'vue';
import Notification from './src/notification';
import NotificationService from './src/notification-service';
export * from './src/notification-types';
export { Notification, NotificationService };
declare const _default: {
    title: string;
    category: string;
    status: string;
    install(app: App): void;
};
export default _default;
