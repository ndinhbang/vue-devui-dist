import './message.scss';
declare const _default: import("vue").DefineComponent<{
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
        readonly type: import("vue").PropType<import("./message-types").MessageType>;
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
        readonly type: import("vue").PropType<() => void>;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("close" | "destroy")[], "close" | "destroy", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
        readonly type: import("vue").PropType<import("./message-types").MessageType>;
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
        readonly type: import("vue").PropType<() => void>;
    };
}>> & {
    onClose?: ((...args: any[]) => any) | undefined;
    onDestroy?: ((...args: any[]) => any) | undefined;
}, {
    readonly type: import("./message-types").MessageType;
    readonly message: string;
    readonly id: string;
    readonly visible: boolean;
    readonly duration: number;
    readonly shadow: boolean;
    readonly bordered: boolean;
    readonly showClose: boolean;
}>;
export default _default;
