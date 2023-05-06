import { PropType, ExtractPropTypes, RenderFunction, VNode } from 'vue';
import type { SetupContext } from 'vue';
import { IItem, TKey, filterValue } from '../transfer-types';
export declare const transferPanelProps: {
    readonly title: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly height: {
        readonly type: NumberConstructor;
        readonly default: 320;
    };
    readonly data: {
        readonly type: PropType<IItem[]>;
        readonly default: () => never[];
    };
    readonly defaultChecked: {
        readonly type: PropType<TKey[]>;
        readonly default: () => never[];
    };
    readonly filter: {
        readonly type: PropType<filterValue>;
        readonly default: false;
    };
    readonly unit: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly placeholder: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly isKeyupSearch: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly search: {
        readonly type: PropType<(direction: string, data: IItem[], keyword: TKey) => void>;
    };
    readonly direction: {
        readonly type: StringConstructor;
        readonly default: "source";
    };
    readonly isDrag: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly sortMethods: {
        readonly type: PropType<(data: IItem[]) => IItem[]>;
    };
    readonly dragstart: {
        readonly type: PropType<(event: DragEvent, item: IItem) => void>;
    };
    readonly drop: {
        readonly type: PropType<(event: DragEvent, item: IItem) => void>;
    };
    readonly dragend: {
        readonly type: PropType<(event: DragEvent, item: IItem) => void>;
    };
    readonly onUpdateAllChecked: {
        readonly type: PropType<(value: boolean) => void>;
    };
    readonly onChangeChecked: {
        readonly type: PropType<([]: TKey) => void>;
    };
    readonly renderContent: {
        readonly type: PropType<(h: RenderFunction, option: IItem) => VNode>;
    };
};
export declare type TTransferPanelProps = ExtractPropTypes<typeof transferPanelProps>;
export declare const transferPanelState: (props: TTransferPanelProps, ctx: SetupContext) => {
    bodyHeight: import("vue").ComputedRef<string>;
    filterData: import("vue").ComputedRef<IItem[]>;
    checkableData: import("vue").ComputedRef<IItem[]>;
    allChecked: import("vue").Ref<boolean>;
    allHalfchecked: import("vue").ComputedRef<boolean>;
    allNum: import("vue").ComputedRef<number>;
    checkedNum: import("vue").ComputedRef<number>;
    query: import("vue").Ref<string>;
    changeAllCheckedHandle: (value: boolean) => void;
    updateModelValueHandle: (value: TKey) => void;
    updateCheckedDataHandle: (value: TKey[]) => void;
    updateDataHandle: (startValue: TKey, endValue: TKey) => void;
};
