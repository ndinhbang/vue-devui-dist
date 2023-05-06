import type { PropType, ExtractPropTypes } from 'vue';
export declare type BadgeStatusType = 'danger' | 'warning' | 'waiting' | 'success' | 'info' | 'common';
export declare type BadgePositionType = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
export declare const badgeProps: {
    count: {
        type: (StringConstructor | NumberConstructor)[];
    };
    maxCount: {
        type: NumberConstructor;
        default: number;
    };
    showDot: {
        type: BooleanConstructor;
        default: boolean;
    };
    status: {
        type: PropType<BadgeStatusType>;
        validator: (val: string) => boolean;
        default: string;
    };
    position: {
        type: PropType<BadgePositionType>;
        default: string;
        validator: (val: string) => boolean;
    };
    offset: {
        type: PropType<number[]>;
    };
    bgColor: {
        type: StringConstructor;
    };
    textColor: {
        type: StringConstructor;
    };
    hidden: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare type BadgeProps = ExtractPropTypes<typeof badgeProps>;
