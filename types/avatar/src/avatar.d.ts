import './avatar.scss';
declare const _default: import("vue").DefineComponent<{
    name: {
        type: StringConstructor;
        default: null;
    };
    gender: {
        type: () => string;
        default: null;
    };
    width: {
        type: NumberConstructor;
        default: number;
    };
    height: {
        type: NumberConstructor;
        default: number;
    };
    isRound: {
        type: BooleanConstructor;
        default: boolean;
    };
    imgSrc: {
        type: StringConstructor;
        default: string;
    };
    customText: {
        type: StringConstructor;
        default: null;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    name: {
        type: StringConstructor;
        default: null;
    };
    gender: {
        type: () => string;
        default: null;
    };
    width: {
        type: NumberConstructor;
        default: number;
    };
    height: {
        type: NumberConstructor;
        default: number;
    };
    isRound: {
        type: BooleanConstructor;
        default: boolean;
    };
    imgSrc: {
        type: StringConstructor;
        default: string;
    };
    customText: {
        type: StringConstructor;
        default: null;
    };
}>>, {
    height: number;
    width: number;
    name: string;
    gender: string;
    isRound: boolean;
    imgSrc: string;
    customText: string;
}>;
export default _default;
