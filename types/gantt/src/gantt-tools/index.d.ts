import './gantt-tools.scss';
declare const _default: import("vue").DefineComponent<{
    unit: {
        type: StringConstructor;
        default: null;
    };
    isFullScreen: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    actionHandle: (type: string) => void;
    currentUnitLabel: import("vue").Ref<string>;
    views: import("vue").Ref<{
        name: string;
        value: string;
    }[]>;
    selectView: (selectItem: {
        name: string;
        value: string;
    }) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("goToday" | "reduceUnit" | "increaseUnit" | "switchView")[], "goToday" | "reduceUnit" | "increaseUnit" | "switchView", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    unit: {
        type: StringConstructor;
        default: null;
    };
    isFullScreen: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onGoToday?: ((...args: any[]) => any) | undefined;
    onReduceUnit?: ((...args: any[]) => any) | undefined;
    onIncreaseUnit?: ((...args: any[]) => any) | undefined;
    onSwitchView?: ((...args: any[]) => any) | undefined;
}, {
    unit: string;
    isFullScreen: boolean;
}>;
export default _default;
