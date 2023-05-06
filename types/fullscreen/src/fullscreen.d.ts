import './fullscreen.scss';
declare const _default: import("vue").DefineComponent<{
    readonly modelValue: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly mode: {
        readonly type: ((new (...args: any[]) => ("normal" | "immersive") & {}) | (() => "normal" | "immersive")) | ((new (...args: any[]) => ("normal" | "immersive") & {}) | (() => "normal" | "immersive"))[];
        readonly default: "normal";
    };
    readonly zIndex: {
        readonly type: NumberConstructor;
        readonly default: 10;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly mode: {
        readonly type: ((new (...args: any[]) => ("normal" | "immersive") & {}) | (() => "normal" | "immersive")) | ((new (...args: any[]) => ("normal" | "immersive") & {}) | (() => "normal" | "immersive"))[];
        readonly default: "normal";
    };
    readonly zIndex: {
        readonly type: NumberConstructor;
        readonly default: 10;
    };
}>>, {
    readonly zIndex: number;
    readonly mode: "normal" | "immersive";
    readonly modelValue: boolean;
}>;
export default _default;
