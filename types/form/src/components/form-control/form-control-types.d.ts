import type { PropType, ExtractPropTypes, ComputedRef } from 'vue';
import type { FormItemContext } from '../form-item/form-item-types';
export declare type FeedbackStatus = 'success' | 'error' | 'pending';
export declare const formControlProps: {
    feedbackStatus: {
        type: PropType<FeedbackStatus>;
    };
    extraInfo: {
        type: StringConstructor;
        default: string;
    };
};
export declare type FormControlProps = ExtractPropTypes<typeof formControlProps>;
export interface UseFormControl {
    controlClasses: ComputedRef<Record<string, boolean>>;
    controlContainerClasses: ComputedRef<Record<string, boolean>>;
}
export interface UseFormControlValidate {
    feedbackStatus: ComputedRef<FormItemContext['validateState']>;
    showFeedback: ComputedRef<boolean | undefined>;
    showPopover: ComputedRef<boolean>;
    showMessage: ComputedRef<boolean>;
    errorMessage: ComputedRef<FormItemContext['validateMessage']>;
    popPosition: ComputedRef<FormItemContext['popPosition']>;
}
