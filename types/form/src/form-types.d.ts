import type { ValidateError, ValidateFieldsError, Rules, Values } from 'async-validator';
import type { PropType, ExtractPropTypes, InjectionKey, SetupContext } from 'vue';
import { FormItemContext, FormRuleItem, FormValidateCallback, FormValidateResult, MessageType, PopPosition } from './components/form-item/form-item-types';
export declare type Layout = 'horizontal' | 'vertical';
export declare type LabelSize = 'sm' | 'md' | 'lg';
export declare type FormSize = 'sm' | 'md' | 'lg';
export declare type LabelAlign = 'start' | 'center' | 'end';
export declare type FormData = Record<string, unknown>;
export declare type FormRules = Partial<Record<string, Array<FormRuleItem>>>;
export interface ValidateFailure {
    errors: ValidateError[] | null;
    fields: ValidateFieldsError;
}
export declare const formProps: {
    readonly data: {
        readonly type: PropType<FormData>;
        readonly default: () => {};
    };
    readonly layout: {
        readonly type: PropType<Layout>;
        readonly default: "horizontal";
    };
    readonly labelSize: {
        readonly type: PropType<LabelSize>;
        readonly default: "md";
    };
    readonly labelAlign: {
        readonly type: PropType<LabelAlign>;
        readonly default: "start";
    };
    readonly rules: {
        readonly type: PropType<Partial<Record<string, FormRuleItem[]>>>;
    };
    readonly messageType: {
        readonly type: PropType<MessageType>;
        readonly default: "popover";
    };
    readonly popPosition: {
        readonly type: PropType<PopPosition[]>;
        readonly default: readonly ["right", "bottom"];
    };
    readonly validateOnRuleChange: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly showFeedback: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly size: {
        readonly type: PropType<FormSize>;
    };
};
export interface UseFieldCollection {
    itemContexts: FormItemContext[];
    addItemContext: (field: FormItemContext) => void;
    removeItemContext: (field: FormItemContext) => void;
}
export interface UseFormValidation {
    validate: (callback?: FormValidateCallback) => FormValidateResult;
    validateFields: (fields: string[], callback: FormValidateCallback) => FormValidateResult;
    resetFields: (fields: string[]) => void;
    clearValidate: (fields: string[]) => void;
}
export declare type FormProps = ExtractPropTypes<typeof formProps>;
export interface FormContext extends FormProps {
    emit: SetupContext['emit'];
    addItemContext: (field: FormItemContext) => void;
    removeItemContext: (field: FormItemContext) => void;
}
export declare const FORM_TOKEN: InjectionKey<FormContext>;
export interface DValidateResult<E = never, F = never> {
    errors: E;
    fields: F;
}
export interface DFormValidateSubmitData {
    callback(valid: boolean, result: DValidateResult): void;
}
export interface UseValidate {
    validate: (descriptor: Rules, validateObject: Values) => Promise<Values>;
    createDevUIBuiltinValidator: (rule: FormRules) => void;
}
