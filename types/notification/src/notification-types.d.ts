import type { ExtractPropTypes, PropType, h } from 'vue';
export declare type NotificationType = 'normal' | 'success' | 'error' | 'warning' | 'info';
export interface Message {
    type?: NotificationType;
    title?: string;
    content?: string | ((message: Message) => ReturnType<typeof h>);
    duration?: number;
}
export declare const notificationProps: {
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: PropType<NotificationType>;
        default: string;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    onClose: {
        type: PropType<() => void>;
    };
};
export declare type EmitEventFn = (event: 'update:modelValue' | 'destroy', result?: unknown) => void;
export declare type VoidFn = () => void;
export declare type NotificationProps = ExtractPropTypes<typeof notificationProps>;
export declare type NotificationOption = Partial<NotificationProps> & {
    content?: string;
};
