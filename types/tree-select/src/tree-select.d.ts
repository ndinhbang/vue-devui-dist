import './tree-select.scss';
import { TreeItem } from './tree-select-types';
declare const _default: import("vue").DefineComponent<{
    readonly modelValue: {
        readonly type: import("vue").PropType<import("./tree-select-types").ModelValue>;
        readonly default: "";
    };
    readonly treeData: {
        readonly type: import("vue").PropType<import("./tree-select-types").TreeData>;
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
        readonly type: import("vue").PropType<(bool: boolean) => void>;
        readonly default: undefined;
    };
    readonly onValueChange: {
        readonly type: import("vue").PropType<(item: TreeItem, index: number) => void>;
        readonly default: undefined;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "update:modelValue" | "toggleChange" | "valueChange", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: {
        readonly type: import("vue").PropType<import("./tree-select-types").ModelValue>;
        readonly default: "";
    };
    readonly treeData: {
        readonly type: import("vue").PropType<import("./tree-select-types").TreeData>;
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
        readonly type: import("vue").PropType<(bool: boolean) => void>;
        readonly default: undefined;
    };
    readonly onValueChange: {
        readonly type: import("vue").PropType<(item: TreeItem, index: number) => void>;
        readonly default: undefined;
    };
}>>, {
    readonly disabled: boolean;
    readonly multiple: boolean;
    readonly placeholder: string;
    readonly modelValue: import("./tree-select-types").ModelValue;
    readonly onToggleChange: (bool: boolean) => void;
    readonly allowClear: boolean;
    readonly onValueChange: (item: TreeItem, index: number) => void;
    readonly treeData: import("./tree-select-types").TreeData;
    readonly leafOnly: boolean;
    readonly searchable: boolean;
    readonly enableLabelization: boolean;
}>;
export default _default;
