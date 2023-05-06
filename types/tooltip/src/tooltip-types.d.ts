import type { ComputedRef, ExtractPropTypes, PropType, Ref } from 'vue';
export declare type BasePlacement = 'top' | 'right' | 'bottom' | 'left';
export declare const tooltipProps: {
    content: {
        type: StringConstructor;
        default: string;
    };
    position: {
        type: PropType<BasePlacement | BasePlacement[]>;
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
    enterable: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideAfter: {
        type: NumberConstructor;
        default: number;
    };
};
export declare type TooltipProps = ExtractPropTypes<typeof tooltipProps>;
export declare type UseTooltipFn = {
    visible: Ref<boolean>;
    placement: Ref<BasePlacement>;
    positionArr: ComputedRef<BasePlacement[]>;
    overlayStyles: ComputedRef<Record<string, string>>;
    onPositionChange: (pos: BasePlacement) => void;
    onMouseenter: () => void;
    onMouseleave: () => void;
    onMouseenterOverlay: () => void;
};
