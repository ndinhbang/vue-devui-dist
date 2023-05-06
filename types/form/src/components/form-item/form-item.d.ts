import './form-item.scss';
declare const _default: import("vue").DefineComponent<{
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
        type: import("vue").PropType<import("./form-item-types").MessageType>;
    };
    popPosition: {
        type: import("vue").PropType<import("./form-item-types").PopPosition[]>;
    };
    rules: {
        type: import("vue").PropType<[import("./form-item-types").FormRuleItem, import("./form-item-types").FormRuleItem[]]>;
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
        type: import("vue").PropType<import("../form-control/form-control-types").FeedbackStatus>;
    };
    extraInfo: {
        type: StringConstructor;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
        type: import("vue").PropType<import("./form-item-types").MessageType>;
    };
    popPosition: {
        type: import("vue").PropType<import("./form-item-types").PopPosition[]>;
    };
    rules: {
        type: import("vue").PropType<[import("./form-item-types").FormRuleItem, import("./form-item-types").FormRuleItem[]]>;
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
        type: import("vue").PropType<import("../form-control/form-control-types").FeedbackStatus>;
    };
    extraInfo: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    required: boolean;
    field: string;
    extraInfo: string;
    showFeedback: boolean;
    helpTips: string;
}>;
export default _default;
