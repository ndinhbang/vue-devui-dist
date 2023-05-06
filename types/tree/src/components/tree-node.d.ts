import { IInnerTreeNode } from '../composables';
declare const _default: import("vue").DefineComponent<{
    check: {
        type: import("vue").PropType<import("../composables").ICheck>;
        default: boolean;
    };
    dragdrop: {
        type: import("vue").PropType<import("../composables").IDragdrop>;
        default: boolean;
    };
    operate: {
        type: import("vue").PropType<import("../composables").IOperate>;
        default: boolean;
    };
    data: {
        type: import("vue").PropType<IInnerTreeNode>;
        default: {};
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    check: {
        type: import("vue").PropType<import("../composables").ICheck>;
        default: boolean;
    };
    dragdrop: {
        type: import("vue").PropType<import("../composables").IDragdrop>;
        default: boolean;
    };
    operate: {
        type: import("vue").PropType<import("../composables").IOperate>;
        default: boolean;
    };
    data: {
        type: import("vue").PropType<IInnerTreeNode>;
        default: {};
    };
}>>, {
    data: IInnerTreeNode;
    operate: import("../composables").IOperate;
    check: import("../composables").ICheck;
    dragdrop: import("../composables").IDragdrop;
}>;
export default _default;
