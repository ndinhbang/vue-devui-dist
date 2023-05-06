declare const _default: import("vue").DefineComponent<{
    label: {
        type: StringConstructor;
    };
    value: {
        type: (StringConstructor | NumberConstructor)[];
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    hovering: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "select"[], "select", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    label: {
        type: StringConstructor;
    };
    value: {
        type: (StringConstructor | NumberConstructor)[];
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    hovering: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onSelect?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    hovering: boolean;
}>;
export default _default;
