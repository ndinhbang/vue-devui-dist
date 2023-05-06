import './breadcrumb-item.scss';
declare const _default: import("vue").DefineComponent<{
    readonly showMenu: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly menuList: {
        readonly type: import("vue").PropType<import("./breadcrumb-item-types").MenuConfig[]>;
    };
    readonly isSearch: {
        readonly type: BooleanConstructor;
        readonly dafault: false;
    };
    readonly to: {
        readonly type: import("vue").PropType<string | Record<string, unknown>>;
        readonly default: "";
    };
    readonly replace: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly showMenu: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly menuList: {
        readonly type: import("vue").PropType<import("./breadcrumb-item-types").MenuConfig[]>;
    };
    readonly isSearch: {
        readonly type: BooleanConstructor;
        readonly dafault: false;
    };
    readonly to: {
        readonly type: import("vue").PropType<string | Record<string, unknown>>;
        readonly default: "";
    };
    readonly replace: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
}>>, {
    readonly replace: boolean;
    readonly to: string | Record<string, unknown>;
    readonly showMenu: boolean;
    readonly isSearch: boolean;
}>;
export default _default;
