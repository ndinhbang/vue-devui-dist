import './tree.scss';
declare const _default: import("vue").DefineComponent<{
    height: {
        type: import("vue").PropType<string | number>;
    };
    check: {
        type: import("vue").PropType<import("./composables").ICheck>;
        default: boolean;
    };
    dragdrop: {
        type: import("vue").PropType<import("./composables").IDragdrop>;
        default: boolean;
    };
    operate: {
        type: import("vue").PropType<import("./composables").IOperate>;
        default: boolean;
    };
    data: {
        type: import("vue").PropType<import("./composables").ITreeNode[]>;
        default: never[];
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "toggle-change" | "check-change" | "lazy-load" | "select-change" | "node-click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    height: {
        type: import("vue").PropType<string | number>;
    };
    check: {
        type: import("vue").PropType<import("./composables").ICheck>;
        default: boolean;
    };
    dragdrop: {
        type: import("vue").PropType<import("./composables").IDragdrop>;
        default: boolean;
    };
    operate: {
        type: import("vue").PropType<import("./composables").IOperate>;
        default: boolean;
    };
    data: {
        type: import("vue").PropType<import("./composables").ITreeNode[]>;
        default: never[];
    };
}>>, {
    data: import("./composables").ITreeNode[];
    operate: import("./composables").IOperate;
    check: import("./composables").ICheck;
    dragdrop: import("./composables").IDragdrop;
}>;
export default _default;
