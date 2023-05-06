import type { ExtractPropTypes } from 'vue';
export declare const commentProps: {
    readonly author: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly avatar: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly datetime: {
        readonly type: StringConstructor;
        readonly default: "";
    };
};
export declare type CommentProps = ExtractPropTypes<typeof commentProps>;
