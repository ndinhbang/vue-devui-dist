import type { ExtractPropTypes, Ref } from 'vue';
export declare type Position = {
    bottom: string;
    right: string;
};
export declare const backTopProps: {
    readonly bottom: {
        readonly type: StringConstructor;
        readonly default: "50px";
    };
    readonly right: {
        readonly type: StringConstructor;
        readonly default: "30px";
    };
    readonly target: {
        readonly type: StringConstructor;
        readonly default: "window";
    };
    readonly visibleHeight: {
        readonly type: NumberConstructor;
        readonly default: 300;
    };
};
export declare type IBackTopRef = Ref<HTMLElement | null>;
export declare type BackTopProps = ExtractPropTypes<typeof backTopProps>;
