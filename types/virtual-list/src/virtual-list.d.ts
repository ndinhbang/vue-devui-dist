export interface ListState {
    scrollTop: number;
    scrollMoving: boolean;
}
declare const _default: import("vue").DefineComponent<{
    readonly data: {
        readonly type: import("vue").PropType<Record<string, never>[]>;
        readonly default: () => never[];
    };
    readonly component: {
        readonly type: StringConstructor;
        readonly default: "div";
    };
    readonly height: {
        readonly type: NumberConstructor;
        readonly default: 100;
    };
    readonly itemHeight: {
        readonly type: NumberConstructor;
        readonly default: 20;
    };
    readonly virtual: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly fullHeight: {
        readonly type: BooleanConstructor;
    };
    readonly itemKey: {
        readonly type: import("vue").PropType<string | number | ((item: Record<string, never>) => string | number)>;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly data: {
        readonly type: import("vue").PropType<Record<string, never>[]>;
        readonly default: () => never[];
    };
    readonly component: {
        readonly type: StringConstructor;
        readonly default: "div";
    };
    readonly height: {
        readonly type: NumberConstructor;
        readonly default: 100;
    };
    readonly itemHeight: {
        readonly type: NumberConstructor;
        readonly default: 20;
    };
    readonly virtual: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly fullHeight: {
        readonly type: BooleanConstructor;
    };
    readonly itemKey: {
        readonly type: import("vue").PropType<string | number | ((item: Record<string, never>) => string | number)>;
    };
}>>, {
    readonly data: Record<string, never>[];
    readonly height: number;
    readonly component: string;
    readonly itemHeight: number;
    readonly virtual: boolean;
    readonly fullHeight: boolean;
}>;
export default _default;
