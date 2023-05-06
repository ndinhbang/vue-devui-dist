import type { ExtractPropTypes, PropType } from 'vue';
export declare type MessageType = 'normal' | 'success' | 'error' | 'warning' | 'info';
export declare const messageProps: {
    readonly id: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly visible: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly message: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly type: {
        readonly type: PropType<MessageType>;
        readonly default: "normal";
    };
    readonly bordered: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly shadow: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly duration: {
        readonly type: NumberConstructor;
        readonly default: 3000;
    };
    readonly showClose: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly onClose: {
        readonly type: PropType<() => void>;
    };
};
export declare type EmitEventFn = (event: 'close' | 'destroy', result?: unknown) => void;
export declare type MessageProps = ExtractPropTypes<typeof messageProps>;
export declare type MessageOption = Partial<MessageProps> & {
    message?: string;
};
export declare type VoidFn = () => void;
