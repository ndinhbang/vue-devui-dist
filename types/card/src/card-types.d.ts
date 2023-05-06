import { ExtractPropTypes, PropType } from 'vue';
export declare const cardProps: {
    readonly align: {
        readonly type: PropType<"end" | "start" | "spaceBetween">;
        readonly default: "start";
    };
    readonly src: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly shadow: {
        readonly type: PropType<"always" | "never" | "hover">;
        readonly default: "hover";
    };
};
export declare type CardProps = ExtractPropTypes<typeof cardProps>;
