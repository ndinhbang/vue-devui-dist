import './index.scss';
declare const VerticalSlider: import("vue").DefineComponent<{
    readonly size: {
        readonly type: NumberConstructor;
        readonly default: 26;
    };
    readonly items: {
        readonly type: ArrayConstructor;
    };
    readonly selectedIndex: {
        readonly type: NumberConstructor;
    };
    readonly className: {
        readonly type: StringConstructor;
    };
    readonly itemClassNormal: {
        readonly type: StringConstructor;
    };
    readonly itemClassSelected: {
        readonly type: StringConstructor;
    };
    readonly onChange: {
        readonly type: import("vue").PropType<(...args: unknown[]) => void>;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly size: {
        readonly type: NumberConstructor;
        readonly default: 26;
    };
    readonly items: {
        readonly type: ArrayConstructor;
    };
    readonly selectedIndex: {
        readonly type: NumberConstructor;
    };
    readonly className: {
        readonly type: StringConstructor;
    };
    readonly itemClassNormal: {
        readonly type: StringConstructor;
    };
    readonly itemClassSelected: {
        readonly type: StringConstructor;
    };
    readonly onChange: {
        readonly type: import("vue").PropType<(...args: unknown[]) => void>;
    };
}>>, {
    readonly size: number;
}>;
export default VerticalSlider;
