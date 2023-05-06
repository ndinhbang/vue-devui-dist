import { ExtractPropTypes } from 'vue';
export declare const timePopupProps: {
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
};
export declare type TimePopupProps = ExtractPropTypes<typeof timePopupProps>;
