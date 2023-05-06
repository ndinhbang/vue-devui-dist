import './index.scss';
declare const _default: import("vue").DefineComponent<{
    cascaderItems: {
        type: import("vue").PropType<import("../../src/cascader-types").CascaderItem[]>;
        default: () => import("../../src/cascader-types").CascaderItem[];
    };
    dropdownWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    ulIndex: {
        type: NumberConstructor;
        default: number;
    };
    cascaderItemNeedProps: {
        type: import("vue").PropType<import("../../src/cascader-types").CascaderItemNeedType>;
        default: () => import("../../src/cascader-types").CascaderItemNeedType;
    };
    stopDefault: {
        type: BooleanConstructor;
        default: boolean;
    };
    cascaderOptions: {
        type: import("vue").PropType<[import("../../src/cascader-types").CascaderItem[]]>;
        default: () => [import("../../src/cascader-types").CascaderItem[]];
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    cascaderItems: {
        type: import("vue").PropType<import("../../src/cascader-types").CascaderItem[]>;
        default: () => import("../../src/cascader-types").CascaderItem[];
    };
    dropdownWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    ulIndex: {
        type: NumberConstructor;
        default: number;
    };
    cascaderItemNeedProps: {
        type: import("vue").PropType<import("../../src/cascader-types").CascaderItemNeedType>;
        default: () => import("../../src/cascader-types").CascaderItemNeedType;
    };
    stopDefault: {
        type: BooleanConstructor;
        default: boolean;
    };
    cascaderOptions: {
        type: import("vue").PropType<[import("../../src/cascader-types").CascaderItem[]]>;
        default: () => [import("../../src/cascader-types").CascaderItem[]];
    };
}>>, {
    dropdownWidth: string | number;
    cascaderItems: import("../../src/cascader-types").CascaderItem[];
    ulIndex: number;
    cascaderItemNeedProps: import("../../src/cascader-types").CascaderItemNeedType;
    stopDefault: boolean;
    cascaderOptions: [import("../../src/cascader-types").CascaderItem[]];
}>;
export default _default;
