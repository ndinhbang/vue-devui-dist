import type { PropType, ExtractPropTypes } from 'vue';
export interface TreeItem {
    id: number | string;
    label: string;
    parent?: TreeItem;
    children?: Array<TreeItem>;
    level?: number;
    loading?: boolean;
    opened?: boolean;
    checked?: boolean;
    halfchecked?: boolean;
    disabled?: boolean;
    [prop: string]: any;
}
export declare type TreeData = Array<TreeItem>;
export declare type ModelValue = number | string | Array<number | string>;
export declare const treeSelectProps: {
    readonly modelValue: {
        readonly type: PropType<ModelValue>;
        readonly default: "";
    };
    readonly treeData: {
        readonly type: PropType<TreeData>;
        readonly default: () => never[];
    };
    readonly placeholder: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly multiple: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly leafOnly: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly searchable: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly allowClear: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly enableLabelization: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly onToggleChange: {
        readonly type: PropType<(bool: boolean) => void>;
        readonly default: undefined;
    };
    readonly onValueChange: {
        readonly type: PropType<(item: TreeItem, index: number) => void>;
        readonly default: undefined;
    };
};
export declare type TreeSelectProps = ExtractPropTypes<typeof treeSelectProps>;
