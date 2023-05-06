import './form-control.scss';
declare const _default: import("vue").DefineComponent<{
    feedbackStatus: {
        type: import("vue").PropType<import("./form-control-types").FeedbackStatus>;
    };
    extraInfo: {
        type: StringConstructor;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    feedbackStatus: {
        type: import("vue").PropType<import("./form-control-types").FeedbackStatus>;
    };
    extraInfo: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    extraInfo: string;
}>;
export default _default;
