import './index.scss';
declare const _default: import("vue").DefineComponent<{
    readonly attach: {
        readonly type: StringConstructor;
    };
    readonly onBinding: {
        readonly type: import("vue").PropType<(...args: unknown[]) => void>;
    };
    readonly onClosed: {
        readonly type: import("vue").PropType<(...args: unknown[]) => void>;
    };
    readonly onOpen: {
        readonly type: import("vue").PropType<(...args: unknown[]) => void>;
    };
    readonly show: {
        readonly type: BooleanConstructor;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly attach: {
        readonly type: StringConstructor;
    };
    readonly onBinding: {
        readonly type: import("vue").PropType<(...args: unknown[]) => void>;
    };
    readonly onClosed: {
        readonly type: import("vue").PropType<(...args: unknown[]) => void>;
    };
    readonly onOpen: {
        readonly type: import("vue").PropType<(...args: unknown[]) => void>;
    };
    readonly show: {
        readonly type: BooleanConstructor;
    };
}>>, {
    readonly show: boolean;
}>;
export default _default;
