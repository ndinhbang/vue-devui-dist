import { ExtractPropTypes, PropType } from 'vue';
import { ArrType } from '../../types';
export declare const popupLineProps: {
    hourList: {
        type: PropType<ArrType[]>;
        default: () => Array<ArrType>;
    };
    minuteList: {
        type: PropType<ArrType[]>;
        default: () => Array<ArrType>;
    };
    secondList: {
        type: PropType<ArrType[]>;
        default: () => Array<ArrType>;
    };
    format: {
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
    itemHeight: {
        type: NumberConstructor;
        default: number;
    };
};
export declare type PopupLineProps = ExtractPropTypes<typeof popupLineProps>;
