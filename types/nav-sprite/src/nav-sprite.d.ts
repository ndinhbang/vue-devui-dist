declare const _default: import("vue").DefineComponent<{
    target: {
        type: ObjectConstructor;
    };
    scrollTarget: {
        type: ObjectConstructor;
    };
    view: {
        type: () => {
            top?: number | undefined;
            bottom?: number | undefined;
        };
        default: {
            top: number;
            bottom: number;
        };
    };
    hashSupport: {
        type: BooleanConstructor;
        default: boolean;
    };
    mode: {
        type: () => import("./nav-sprite-types").SpriteMode;
        default: string;
    };
    maxLevel: {
        type: NumberConstructor;
        default: number;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    indent: {
        type: NumberConstructor;
        default: number;
    };
    width: {
        type: NumberConstructor;
        default: number;
    };
    height: {
        type: NumberConstructor;
        default: number;
    };
    isOpen: {
        type: BooleanConstructor;
        default: boolean;
    };
    spriteOption: {
        type: () => import("./nav-sprite-types").SpriteOption;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "afterNavInit"[], "afterNavInit", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    target: {
        type: ObjectConstructor;
    };
    scrollTarget: {
        type: ObjectConstructor;
    };
    view: {
        type: () => {
            top?: number | undefined;
            bottom?: number | undefined;
        };
        default: {
            top: number;
            bottom: number;
        };
    };
    hashSupport: {
        type: BooleanConstructor;
        default: boolean;
    };
    mode: {
        type: () => import("./nav-sprite-types").SpriteMode;
        default: string;
    };
    maxLevel: {
        type: NumberConstructor;
        default: number;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    indent: {
        type: NumberConstructor;
        default: number;
    };
    width: {
        type: NumberConstructor;
        default: number;
    };
    height: {
        type: NumberConstructor;
        default: number;
    };
    isOpen: {
        type: BooleanConstructor;
        default: boolean;
    };
    spriteOption: {
        type: () => import("./nav-sprite-types").SpriteOption;
    };
}>> & {
    onAfterNavInit?: ((...args: any[]) => any) | undefined;
}, {
    height: number;
    width: number;
    view: {
        top?: number | undefined;
        bottom?: number | undefined;
    };
    title: string;
    mode: import("./nav-sprite-types").SpriteMode;
    isOpen: boolean;
    hashSupport: boolean;
    maxLevel: number;
    indent: number;
}>;
export default _default;
