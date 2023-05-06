import { ExtractPropTypes, PropType } from 'vue';
export declare type CollapseActiveData = number | string | Array<number | string>;
export declare const collapseProps: {
    readonly modelValue: {
        readonly type: PropType<CollapseActiveData>;
        readonly default: "";
        readonly required: true;
    };
    readonly accordion: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
};
export declare type CollapseProps = ExtractPropTypes<typeof collapseProps>;
export declare const collapseItemProps: {
    readonly name: {
        readonly type: PropType<string | number>;
        readonly default: "";
        readonly required: true;
    };
    readonly title: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
};
export declare type CollapseItemProps = ExtractPropTypes<typeof collapseItemProps>;
export interface CollapseContext extends CollapseProps {
    collapseItemClick: (name: string | number) => void;
}
