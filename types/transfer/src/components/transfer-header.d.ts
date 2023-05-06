declare const _default: import("vue").DefineComponent<{
    readonly title: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly checked: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly halfchecked: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly total: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly checkedNum: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly unit: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly onChange: {
        readonly type: import("vue").PropType<(value: boolean) => void>;
    };
    readonly search: {
        readonly type: import("vue").PropType<(direction: string, data: import("../transfer-types").IItem[], keyword: import("../transfer-types").TKey) => void>;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[] | JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly title: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly checked: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly halfchecked: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly total: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly checkedNum: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly unit: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly onChange: {
        readonly type: import("vue").PropType<(value: boolean) => void>;
    };
    readonly search: {
        readonly type: import("vue").PropType<(direction: string, data: import("../transfer-types").IItem[], keyword: import("../transfer-types").TKey) => void>;
    };
}>>, {
    readonly total: number;
    readonly title: string;
    readonly unit: string;
    readonly checked: boolean;
    readonly halfchecked: boolean;
    readonly checkedNum: number;
}>;
export default _default;
