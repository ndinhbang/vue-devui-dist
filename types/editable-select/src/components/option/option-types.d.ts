import { ExtractPropTypes } from 'vue';
export declare const editableSelectOptionProps: {
    label: {
        type: StringConstructor;
    };
    value: {
        type: (StringConstructor | NumberConstructor)[];
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    hovering: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare type EditableSelectOptionProps = ExtractPropTypes<typeof editableSelectOptionProps>;
