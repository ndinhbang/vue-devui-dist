import type { PropType, ExtractPropTypes } from 'vue';
export declare const imagePreviewProps: {
    readonly url: {
        readonly type: StringConstructor;
        readonly default: "";
        readonly required: true;
    };
    readonly previewUrlList: {
        readonly type: PropType<string[]>;
        readonly default: () => never[];
        readonly required: true;
    };
    readonly zIndex: {
        readonly type: NumberConstructor;
        readonly required: false;
    };
    readonly backDropZIndex: {
        readonly type: NumberConstructor;
        readonly required: false;
    };
};
export interface BindingTypes {
    value: {
        custom?: Record<string, unknown>;
        disableDefault?: boolean;
        zIndex?: number;
        backDropZIndex?: number;
    };
    [key: string]: unknown;
}
export interface UpdateBindingTypes extends BindingTypes {
    oldValue: BindingTypes['value'];
}
export declare type ImagePreviewProps = ExtractPropTypes<typeof imagePreviewProps>;
