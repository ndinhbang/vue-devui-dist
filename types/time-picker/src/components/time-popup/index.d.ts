import './index.scss';
declare const _default: import("vue").DefineComponent<{
    showPopup: {
        type: BooleanConstructor;
        default: boolean;
    };
    popupTop: {
        type: NumberConstructor;
        default: number;
    };
    popupLeft: {
        type: NumberConstructor;
        default: number;
    };
    popupWidth: {
        type: NumberConstructor;
        default: number;
    };
    popupFormat: {
        type: StringConstructor;
        default: string;
    };
    minTime: {
        type: StringConstructor;
        default: string;
    };
    maxTime: {
        type: StringConstructor;
        default: string;
    };
    bindData: {
        type: StringConstructor;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "change" | "submitData", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    showPopup: {
        type: BooleanConstructor;
        default: boolean;
    };
    popupTop: {
        type: NumberConstructor;
        default: number;
    };
    popupLeft: {
        type: NumberConstructor;
        default: number;
    };
    popupWidth: {
        type: NumberConstructor;
        default: number;
    };
    popupFormat: {
        type: StringConstructor;
        default: string;
    };
    minTime: {
        type: StringConstructor;
        default: string;
    };
    maxTime: {
        type: StringConstructor;
        default: string;
    };
    bindData: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    bindData: string;
    minTime: string;
    maxTime: string;
    showPopup: boolean;
    popupTop: number;
    popupLeft: number;
    popupWidth: number;
    popupFormat: string;
}>;
export default _default;
