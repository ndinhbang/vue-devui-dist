import type { ComputedRef, ExtractPropTypes } from 'vue';
export declare const formLabelProps: {
    helpTips: {
        type: StringConstructor;
        default: string;
    };
};
export declare type FormLabelProps = ExtractPropTypes<typeof formLabelProps>;
export interface UseFormLabel {
    labelClasses: ComputedRef<Record<string, boolean>>;
    labelInnerClasses: ComputedRef<Record<string, boolean>>;
}
