import type { PropType, ExtractPropTypes } from 'vue';
export declare type TagType = 'primary' | 'success' | 'warning' | 'danger';
export declare type SizeType = 'lg' | 'md' | 'sm';
export declare const tagProps: {
    readonly type: {
        readonly type: PropType<TagType>;
        readonly default: "";
    };
    readonly color: {
        readonly type: PropType<string>;
        readonly default: "";
    };
    readonly titleContent: {
        readonly type: PropType<string>;
        readonly default: "";
    };
    readonly checked: {
        readonly type: PropType<boolean>;
        readonly default: false;
    };
    readonly deletable: {
        readonly type: PropType<boolean>;
        readonly default: false;
    };
    readonly size: {
        readonly type: PropType<SizeType>;
        readonly default: "md";
    };
};
export declare type TagProps = ExtractPropTypes<typeof tagProps>;
