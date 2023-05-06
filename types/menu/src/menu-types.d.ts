import { ExtractPropTypes } from 'vue';
export declare type menuMode = 'vertical' | 'horizontal';
export declare const menuProps: {
    readonly width: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly collapsed: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly collapsedIndent: {
        readonly type: NumberConstructor;
        readonly default: 24;
    };
    readonly indentSize: {
        readonly type: NumberConstructor;
        readonly default: 24;
    };
    readonly multiple: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly openKeys: {
        readonly type: ArrayConstructor;
        readonly default: readonly [];
    };
    readonly defaultSelectKeys: {
        readonly type: ArrayConstructor;
        readonly default: readonly [];
    };
    readonly mode: {
        readonly type: () => menuMode;
        readonly default: "vertical";
    };
    readonly router: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
};
export declare type MenuProps = ExtractPropTypes<typeof menuProps>;
