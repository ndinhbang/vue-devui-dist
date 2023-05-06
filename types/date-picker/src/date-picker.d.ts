import './date-picker.scss';
declare const _default: import("vue").DefineComponent<{
    readonly selectedDateChange: {
        readonly type: import("vue").PropType<(...args: unknown[]) => void>;
    };
    readonly autoClose: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly range: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly showTime: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly format: {
        readonly type: StringConstructor;
        readonly default: "y/MM/dd";
    };
    readonly rangeSpliter: {
        readonly type: StringConstructor;
        readonly default: "-";
    };
    readonly attachInputDom: {
        readonly type: StringConstructor;
    };
    readonly dateMin: {
        readonly type: StringConstructor;
    };
    readonly dateMax: {
        readonly type: StringConstructor;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly selectedDateChange: {
        readonly type: import("vue").PropType<(...args: unknown[]) => void>;
    };
    readonly autoClose: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly range: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly showTime: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly format: {
        readonly type: StringConstructor;
        readonly default: "y/MM/dd";
    };
    readonly rangeSpliter: {
        readonly type: StringConstructor;
        readonly default: "-";
    };
    readonly attachInputDom: {
        readonly type: StringConstructor;
    };
    readonly dateMin: {
        readonly type: StringConstructor;
    };
    readonly dateMax: {
        readonly type: StringConstructor;
    };
}>>, {
    readonly range: boolean;
    readonly format: string;
    readonly autoClose: boolean;
    readonly showTime: boolean;
    readonly rangeSpliter: string;
}>;
export default _default;
