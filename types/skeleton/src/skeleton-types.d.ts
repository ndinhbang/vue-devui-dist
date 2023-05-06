import type { ExtractPropTypes, InjectionKey, Ref } from 'vue';
export declare const skeletonProps: {
    readonly rows: {
        readonly type: NumberConstructor;
        readonly default: 3;
    };
    readonly round: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly loading: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly showAnimation: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
};
export declare type SkeletonProps = ExtractPropTypes<typeof skeletonProps>;
export declare const roundInjectionKey: InjectionKey<Ref<boolean>>;
export declare const animationInjectionKey: InjectionKey<Ref<boolean>>;
