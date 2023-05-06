import { PropType, ExtractPropTypes, RenderFunction, VNode } from 'vue';
import type { SetupContext } from 'vue';
import { IItem, TKey, filterValue } from '../transfer-types';
export declare const transferBodyProps: {
    readonly height: {
        readonly type: NumberConstructor;
        readonly default: 320;
    };
    readonly data: {
        readonly type: PropType<IItem[]>;
        readonly default: () => never[];
    };
    readonly defaultChecked: {
        readonly type: PropType<string[]>;
        readonly default: () => never[];
    };
    readonly filter: {
        readonly type: PropType<filterValue>;
        readonly default: false;
    };
    readonly queryString: {
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
        readonly type: PropType<(data: IItem[], keyword: TKey) => void>;
    };
    readonly isDrag: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly onChange: {
        readonly type: PropType<(v: string[]) => void>;
        readonly default: undefined;
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
export declare type TTransferBodyProps = ExtractPropTypes<typeof transferBodyProps>;
export declare const transferBodyState: (props: TTransferBodyProps, ctx: SetupContext) => {
    bodyHeight: import("vue").ComputedRef<string>;
    query: import("vue").Ref<string>;
    checkedListModels: import("vue").Ref<{
        value: string | number;
        checked: boolean;
        name: string;
    }[]>;
    dragHighlight: import("vue").Ref<TKey | null>;
    dragOverNodeKey: import("vue").Ref<any>;
    dropPosition: import("vue").Ref<number | null>;
    dragTimer: import("vue").Ref<number>;
    dragRef: import("vue").Ref<HTMLElement | null>;
    updateFilterQueryHandle: (value: TKey) => void;
    updateCheckedListModels: (idx: number, value: boolean) => void;
    setCurrentDragItem: (event: Event, item: IItem, reset: boolean) => void;
    setDragOverNodeKeyHandle: (event: DragEvent, item: IItem) => void;
    dragoverHandle: (event: DragEvent, item: IItem) => void;
    dragleaveHandle: (event: DragEvent, item: IItem) => void;
    dropHandle: (event: DragEvent, item: IItem) => void;
    dragendHandle: (event: DragEvent, item: IItem) => void;
    dragstartHandle: (event: DragEvent, item: IItem) => void;
};
