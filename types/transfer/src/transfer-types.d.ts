import { PropType, ExtractPropTypes, VNode, RenderFunction } from 'vue';
export interface IItem {
    value: string | number;
    name: string;
    disabled: boolean;
}
export interface ICheckList {
    value: string | number;
    checked: boolean;
    name: string;
}
export interface IDargItemAndDropItem {
    startIndex: number;
    endIndex: number;
    dragItem: IItem;
    dropItem: IItem;
}
export declare type TKey = string | number;
export declare type filterValue = boolean | ((data: IItem, key: string) => IItem[]);
export declare const transferProps: {
    readonly modelValue: {
        readonly type: PropType<string | number[]>;
        readonly default: () => never[];
    };
    readonly data: {
        readonly type: PropType<IItem[]>;
        readonly default: () => never[];
    };
    readonly sourceDefaultChecked: {
        readonly type: PropType<string | number[]>;
        readonly default: () => never[];
    };
    readonly targetDefaultChecked: {
        readonly type: PropType<string | number[]>;
        readonly default: () => never[];
    };
    readonly titles: {
        readonly type: PropType<string[]>;
        readonly default: () => string[];
    };
    readonly sourceOption: {
        readonly type: PropType<IItem[]>;
        readonly default: () => never[];
    };
    readonly targetOption: {
        readonly type: PropType<IItem[]>;
        readonly default: () => never[];
    };
    readonly filter: {
        readonly type: PropType<filterValue>;
        readonly default: false;
    };
    readonly height: {
        readonly type: NumberConstructor;
        readonly default: 320;
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
    readonly isSourceDrag: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly isTargetDrag: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly search: {
        readonly type: PropType<(data: IItem[], keyword: TKey) => void>;
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
    readonly renderContent: {
        readonly type: PropType<(h: RenderFunction, option: IItem) => VNode>;
    };
};
export declare type TTransferProps = ExtractPropTypes<typeof transferProps>;
