import type { ExtractPropTypes, PropType, ComputedRef } from 'vue';
export declare type IVariant = 'image' | 'circle' | 'square';
export declare type ISize = 'lg' | 'md' | 'sm';
export declare const skeletonItemProps: {
    readonly variant: {
        readonly type: PropType<IVariant>;
        readonly default: "square";
    };
    readonly size: {
        readonly type: PropType<ISize>;
        readonly default: "md";
    };
};
export declare type SkeletonItemProps = ExtractPropTypes<typeof skeletonItemProps>;
export interface UseSkeletonItem {
    classes: ComputedRef<Record<string, boolean>>;
}
