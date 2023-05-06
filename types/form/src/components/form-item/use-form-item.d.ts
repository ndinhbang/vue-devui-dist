import type { ComputedRef, Ref } from 'vue';
import { FormItemProps, FormItemValidateState, UseFormItem, FormRuleItem, UseFormItemValidate, MessageType, UseFormItemRule } from './form-item-types';
export declare function useFormItem(messageType: ComputedRef<MessageType>, _rules: ComputedRef<FormRuleItem[]>, validateState: Ref<FormItemValidateState>): UseFormItem;
export declare function useFormItemRule(props: FormItemProps): UseFormItemRule;
export declare function useFormItemValidate(props: FormItemProps, _rules: ComputedRef<FormRuleItem[]>): UseFormItemValidate;
