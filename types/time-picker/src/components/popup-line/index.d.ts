import { ArrType } from '../../types';
import './index.scss';
declare const _default: import("vue").DefineComponent<{
    hourList: {
        type: import("vue").PropType<ArrType[]>;
        default: () => ArrType[];
    };
    minuteList: {
        type: import("vue").PropType<ArrType[]>;
        default: () => ArrType[];
    };
    secondList: {
        type: import("vue").PropType<ArrType[]>;
        default: () => ArrType[];
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
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    hourList: {
        type: import("vue").PropType<ArrType[]>;
        default: () => ArrType[];
    };
    minuteList: {
        type: import("vue").PropType<ArrType[]>;
        default: () => ArrType[];
    };
    secondList: {
        type: import("vue").PropType<ArrType[]>;
        default: () => ArrType[];
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
}>>, {
    format: string;
    itemHeight: number;
    hourList: ArrType[];
    minuteList: ArrType[];
    secondList: ArrType[];
    minTime: string;
    maxTime: string;
}>;
export default _default;
