declare const _default: import("vue").DefineComponent<{
    readonly modelValue: {
        readonly type: import("vue").PropType<string | number>;
        readonly default: null;
    };
    readonly type: {
        readonly type: () => import("./tabs-types").ITabsType;
        readonly default: "tabs";
    };
    readonly showContent: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly reactivable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly customWidth: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly cssClass: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly beforeChange: {
        readonly type: import("vue").PropType<(id: import("./tabs-types").Active) => boolean>;
        readonly default: null;
    };
    readonly closeable: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly addable: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly tabPosition: {
        readonly type: () => import("./tabs-types").ITabPositionType;
        readonly default: "top";
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "update:modelValue" | "active-tab-change" | "tab-remove" | "tab-change" | "tab-add", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: {
        readonly type: import("vue").PropType<string | number>;
        readonly default: null;
    };
    readonly type: {
        readonly type: () => import("./tabs-types").ITabsType;
        readonly default: "tabs";
    };
    readonly showContent: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly reactivable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly customWidth: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly cssClass: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly beforeChange: {
        readonly type: import("vue").PropType<(id: import("./tabs-types").Active) => boolean>;
        readonly default: null;
    };
    readonly closeable: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly addable: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly tabPosition: {
        readonly type: () => import("./tabs-types").ITabPositionType;
        readonly default: "top";
    };
}>>, {
    readonly type: import("./tabs-types").ITabsType;
    readonly cssClass: string;
    readonly closeable: boolean;
    readonly modelValue: string | number;
    readonly beforeChange: (id: import("./tabs-types").Active) => boolean;
    readonly showContent: boolean;
    readonly reactivable: boolean;
    readonly customWidth: string;
    readonly addable: boolean;
    readonly tabPosition: import("./tabs-types").ITabPositionType;
}>;
export default _default;
