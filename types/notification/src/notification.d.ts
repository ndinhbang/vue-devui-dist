import './notification.scss';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: import("vue").PropType<import("./notification-types").NotificationType>;
        default: string;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    onClose: {
        type: import("vue").PropType<() => void>;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "destroy")[], "update:modelValue" | "destroy", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: import("vue").PropType<import("./notification-types").NotificationType>;
        default: string;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    onClose: {
        type: import("vue").PropType<() => void>;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onDestroy?: ((...args: any[]) => any) | undefined;
}, {
    type: import("./notification-types").NotificationType;
    title: string;
    duration: number;
    modelValue: boolean;
}>;
export default _default;
