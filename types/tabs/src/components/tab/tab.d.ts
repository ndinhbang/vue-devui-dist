import './tab.scss';
declare const _default: import("vue").DefineComponent<{
    readonly title: {
        readonly type: import("vue").PropType<string | number>;
        readonly default: null;
    };
    readonly id: {
        readonly type: StringConstructor;
        readonly default: null;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly closeable: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
}, () => JSX.Element | null, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly title: {
        readonly type: import("vue").PropType<string | number>;
        readonly default: null;
    };
    readonly id: {
        readonly type: StringConstructor;
        readonly default: null;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly closeable: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
}>>, {
    readonly id: string;
    readonly title: string | number;
    readonly disabled: boolean;
    readonly closeable: boolean;
}>;
export default _default;
