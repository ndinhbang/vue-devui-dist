import './rate.scss';
declare const _default: import("vue").DefineComponent<{
    readonly modelValue: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly read: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly count: {
        readonly type: NumberConstructor;
        readonly default: 5;
    };
    readonly type: {
        readonly type: ((new (...args: any[]) => ("error" | "success" | "warning") & {}) | (() => "error" | "success" | "warning")) | ((new (...args: any[]) => ("error" | "success" | "warning") & {}) | (() => "error" | "success" | "warning"))[];
        readonly default: "";
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly icon: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly character: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly allowHalf: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly onChange: {
        readonly type: import("vue").PropType<(value: number) => void>;
        readonly default: undefined;
    };
    readonly onTouched: {
        readonly type: import("vue").PropType<() => void>;
        readonly default: undefined;
    };
}, {
    totalLevelArray: import("vue").Ref<{
        width: string;
    }[]>;
    chooseValue: import("vue").Ref<number>;
    hoverToggle: (e: MouseEvent, index: number) => void;
    selectValue: (e: MouseEvent, index: number) => void;
    onMouseleave: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly read: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly count: {
        readonly type: NumberConstructor;
        readonly default: 5;
    };
    readonly type: {
        readonly type: ((new (...args: any[]) => ("error" | "success" | "warning") & {}) | (() => "error" | "success" | "warning")) | ((new (...args: any[]) => ("error" | "success" | "warning") & {}) | (() => "error" | "success" | "warning"))[];
        readonly default: "";
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly icon: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly character: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly allowHalf: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly onChange: {
        readonly type: import("vue").PropType<(value: number) => void>;
        readonly default: undefined;
    };
    readonly onTouched: {
        readonly type: import("vue").PropType<() => void>;
        readonly default: undefined;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    readonly type: "error" | "success" | "warning";
    readonly color: string;
    readonly icon: string;
    readonly onChange: (value: number) => void;
    readonly modelValue: number;
    readonly count: number;
    readonly read: boolean;
    readonly character: string;
    readonly allowHalf: boolean;
    readonly onTouched: () => void;
}>;
export default _default;
