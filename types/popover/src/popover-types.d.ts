import type { PropType, ExtractPropTypes, Ref } from 'vue';
export declare type TriggerType = 'click' | 'hover' | 'manually';
export declare type PopType = 'success' | 'error' | 'warning' | 'info' | 'default';
export declare type Placement = 'top' | 'right' | 'bottom' | 'left' | 'top-start' | 'top-end' | 'right-start' | 'right-end' | 'bottom-start' | 'bottom-end' | 'left-start' | 'left-end';
export declare type Alignment = 'start' | 'end';
export declare type OffsetOptions = {
    mainAxis?: number;
    crossAxis?: number;
};
export declare const popoverProps: {
    isOpen: {
        type: BooleanConstructor;
        default: boolean;
    };
    position: {
        type: PropType<Placement[]>;
        default: string[];
    };
    align: {
        type: PropType<Alignment> | null;
        default: null;
    };
    offset: {
        type: PropType<number | OffsetOptions>;
        default: number;
    };
    content: {
        type: StringConstructor;
        default: string;
    };
    trigger: {
        type: PropType<TriggerType>;
        default: string;
    };
    popType: {
        type: PropType<PopType>;
        default: string;
    };
    showAnimation: {
        type: BooleanConstructor;
        default: boolean;
    };
    mouseEnterDelay: {
        type: NumberConstructor;
        default: number;
    };
    mouseLeaveDelay: {
        type: NumberConstructor;
        default: number;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare type PopoverProps = ExtractPropTypes<typeof popoverProps>;
export interface UsePopoverEvent {
    placement: Ref<string>;
    handlePositionChange: (pos: string) => void;
    onMouseenter: () => void;
    onMouseleave: () => void;
}
