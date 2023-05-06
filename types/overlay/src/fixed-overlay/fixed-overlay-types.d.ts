import type { ExtractPropTypes } from 'vue';
export declare const fixedOverlayProps: {
    readonly modelValue: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly lockScroll: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly closeOnClickOverlay: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
};
export declare type FixedOverlayProps = ExtractPropTypes<typeof fixedOverlayProps>;
export interface UseFixedOverlay {
    onClick: (e: Event) => void;
}
