import { ExtractPropTypes } from 'vue';
export declare const subMenuProps: {
    readonly title: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
};
export declare type SubMenuProps = ExtractPropTypes<typeof subMenuProps>;
