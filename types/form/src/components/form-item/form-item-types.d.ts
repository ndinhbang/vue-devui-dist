import type { RuleItem, ValidateFieldsError } from 'async-validator';
import type { ComputedRef, ExtractPropTypes, PropType, InjectionKey, Ref } from 'vue';
import { LabelAlign, LabelSize, Layout } from '../../form-types';
import { FeedbackStatus } from '../form-control/form-control-types';
export declare type FormItemValidateState = '' | 'error' | 'pending' | 'success';
export declare type MessageType = 'popover' | 'text' | 'none';
export declare type PopPosition = 'top' | 'right' | 'bottom' | 'left' | 'top-start' | 'top-end' | 'right-start' | 'right-end' | 'bottom-start' | 'bottom-end' | 'left-start' | 'left-end';
export interface FormRuleItem extends RuleItem {
    trigger?: Array<string>;
}
export declare const formItemProps: {
    label: {
        type: StringConstructor;
    };
    field: {
        type: StringConstructor;
        default: string;
    };
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    messageType: {
        type: PropType<MessageType>;
    };
    popPosition: {
        type: PropType<PopPosition[]>;
    };
    rules: {
        type: PropType<[FormRuleItem, FormRuleItem[]]>;
    };
    showFeedback: {
        type: BooleanConstructor;
        default: undefined;
    };
    helpTips: {
        type: StringConstructor;
        default: string;
    };
    feedbackStatus: {
        type: PropType<FeedbackStatus>;
    };
    extraInfo: {
        type: StringConstructor;
        default: string;
    };
};
export declare type FormItemProps = ExtractPropTypes<typeof formItemProps>;
export declare type FormValidateCallback = (isValid: boolean, invalidFields?: ValidateFieldsError) => void;
export declare type FormValidateResult = Promise<boolean>;
export declare type LabelData = ComputedRef<{
    layout: Layout;
    labelSize: LabelSize;
    labelAlign: LabelAlign;
}>;
export interface FormItemContext extends FormItemProps {
    isRequired: boolean;
    validateState: FormItemValidateState;
    validateMessage: string;
    validate: (trigger: string, callback?: FormValidateCallback) => FormValidateResult;
    resetField: () => void;
    clearValidate: () => void;
}
export interface UseFormItem {
    itemClasses: ComputedRef<Record<string, boolean>>;
    isRequired: ComputedRef<boolean>;
}
export interface UseFormItemValidate {
    validateState: Ref<FormItemValidateState>;
    validateMessage: Ref<string>;
    validate: (trigger: string, callback?: FormValidateCallback) => FormValidateResult;
    resetField: () => void;
    clearValidate: () => void;
}
export interface UseFormItemRule {
    _rules: ComputedRef<FormRuleItem[]>;
}
export declare const FORM_ITEM_TOKEN: InjectionKey<FormItemContext>;
export declare const LABEL_DATA: InjectionKey<LabelData>;
