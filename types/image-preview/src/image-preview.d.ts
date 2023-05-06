import './image-preview.scss';
declare const _default: import("vue").DefineComponent<{
    readonly url: {
        readonly type: StringConstructor;
        readonly default: "";
        readonly required: true;
    };
    readonly previewUrlList: {
        readonly type: import("vue").PropType<string[]>;
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
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, never[], never, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly url: {
        readonly type: StringConstructor;
        readonly default: "";
        readonly required: true;
    };
    readonly previewUrlList: {
        readonly type: import("vue").PropType<string[]>;
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
}>> & {}, {
    readonly url: string;
    readonly previewUrlList: string[];
}>;
export default _default;
