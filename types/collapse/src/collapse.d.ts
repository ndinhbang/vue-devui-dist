import { CollapseActiveData } from './collapse-types';
import './collapse.scss';
declare const _default: import("vue").DefineComponent<{
    readonly modelValue: {
        readonly type: import("vue").PropType<CollapseActiveData>;
        readonly default: "";
        readonly required: true;
    };
    readonly accordion: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: {
        readonly type: import("vue").PropType<CollapseActiveData>;
        readonly default: "";
        readonly required: true;
    };
    readonly accordion: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    readonly accordion: boolean;
    readonly modelValue: CollapseActiveData;
}>;
export default _default;
