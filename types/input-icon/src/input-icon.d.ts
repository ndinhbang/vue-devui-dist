import { PropType } from 'vue';
import './input-icon.scss';
declare const _default: import("vue").DefineComponent<{
    name: {
        type: StringConstructor;
        value: string;
        required: boolean;
    };
    onIconclick: {
        type: PropType<(e: MouseEvent) => void>;
        required: boolean;
    };
    iconBgColor: {
        type: StringConstructor;
        value: string;
    };
    iconColor: {
        type: StringConstructor;
        value: string;
    };
    modelValue: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    error: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    size: {
        readonly type: PropType<import("../../input/src/input-types").InputSize>;
    };
    validateEvent: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    prefix: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    suffix: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    showPassword: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    clearable: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    placeholder: {
        readonly type: StringConstructor;
        readonly default: "";
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    name: {
        type: StringConstructor;
        value: string;
        required: boolean;
    };
    onIconclick: {
        type: PropType<(e: MouseEvent) => void>;
        required: boolean;
    };
    iconBgColor: {
        type: StringConstructor;
        value: string;
    };
    iconColor: {
        type: StringConstructor;
        value: string;
    };
    modelValue: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    error: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    size: {
        readonly type: PropType<import("../../input/src/input-types").InputSize>;
    };
    validateEvent: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    prefix: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    suffix: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    showPassword: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    clearable: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    placeholder: {
        readonly type: StringConstructor;
        readonly default: "";
    };
}>>, {
    error: boolean;
    prefix: string;
    disabled: boolean;
    placeholder: string;
    modelValue: string;
    suffix: string;
    clearable: boolean;
    validateEvent: boolean;
    showPassword: boolean;
}>;
export default _default;
