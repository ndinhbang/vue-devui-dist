import { ExtractPropTypes } from "vue";
export interface IconPropsType {
    width: number;
    height: number;
}
export declare const avatarProps: {
    name: {
        type: StringConstructor;
        default: null;
    };
    gender: {
        type: () => 'male' | 'female' | string;
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
};
export declare type AvatarProps = ExtractPropTypes<typeof avatarProps>;
