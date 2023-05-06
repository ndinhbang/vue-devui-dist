import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    zIndex: {
        type: NumberConstructor;
    };
    container: {
        type: PropType<Element>;
    };
    view: {
        type: ObjectConstructor;
        default: () => {
            top: number;
            bottom: number;
        };
    };
    scrollTarget: {
        type: PropType<Element>;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "statusChange"[], "statusChange", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    zIndex: {
        type: NumberConstructor;
    };
    container: {
        type: PropType<Element>;
    };
    view: {
        type: ObjectConstructor;
        default: () => {
            top: number;
            bottom: number;
        };
    };
    scrollTarget: {
        type: PropType<Element>;
    };
}>> & {
    onStatusChange?: ((...args: any[]) => any) | undefined;
}, {
    view: Record<string, any>;
}>;
export default _default;
