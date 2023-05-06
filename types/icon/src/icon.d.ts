declare const _default: import("vue").DefineComponent<{
    name: {
        type: StringConstructor;
        default: string;
        required: boolean;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    component: {
        type: ObjectConstructor;
        default: null;
    };
    classPrefix: {
        type: StringConstructor;
        default: string;
    };
    operable: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    rotate: {
        type: (StringConstructor | NumberConstructor)[];
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    name: {
        type: StringConstructor;
        default: string;
        required: boolean;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    component: {
        type: ObjectConstructor;
        default: null;
    };
    classPrefix: {
        type: StringConstructor;
        default: string;
    };
    operable: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    rotate: {
        type: (StringConstructor | NumberConstructor)[];
    };
}>>, {
    name: string;
    color: string;
    disabled: boolean;
    size: string | number;
    component: Record<string, any>;
    classPrefix: string;
    operable: boolean;
}>;
export default _default;
