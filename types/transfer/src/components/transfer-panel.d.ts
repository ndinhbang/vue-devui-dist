import { TKey } from '../transfer-types';
declare const _default: import("vue").DefineComponent<{
    readonly title: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly height: {
        readonly type: NumberConstructor;
        readonly default: 320;
    };
    readonly data: {
        readonly type: import("vue").PropType<import("../transfer-types").IItem[]>;
        readonly default: () => never[];
    };
    readonly defaultChecked: {
        readonly type: import("vue").PropType<TKey[]>;
        readonly default: () => never[];
    };
    readonly filter: {
        readonly type: import("vue").PropType<import("../transfer-types").filterValue>;
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
        readonly type: import("vue").PropType<(direction: string, data: import("../transfer-types").IItem[], keyword: TKey) => void>;
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
        readonly type: import("vue").PropType<(data: import("../transfer-types").IItem[]) => import("../transfer-types").IItem[]>;
    };
    readonly dragstart: {
        readonly type: import("vue").PropType<(event: DragEvent, item: import("../transfer-types").IItem) => void>;
    };
    readonly drop: {
        readonly type: import("vue").PropType<(event: DragEvent, item: import("../transfer-types").IItem) => void>;
    };
    readonly dragend: {
        readonly type: import("vue").PropType<(event: DragEvent, item: import("../transfer-types").IItem) => void>;
    };
    readonly onUpdateAllChecked: {
        readonly type: import("vue").PropType<(value: boolean) => void>;
    };
    readonly onChangeChecked: {
        readonly type: import("vue").PropType<([]: TKey) => void>;
    };
    readonly renderContent: {
        readonly type: import("vue").PropType<(h: import("vue").RenderFunction, option: import("../transfer-types").IItem) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>>;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "updateAllChecked" | "changeChecked" | "changeButtonState", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly title: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly height: {
        readonly type: NumberConstructor;
        readonly default: 320;
    };
    readonly data: {
        readonly type: import("vue").PropType<import("../transfer-types").IItem[]>;
        readonly default: () => never[];
    };
    readonly defaultChecked: {
        readonly type: import("vue").PropType<TKey[]>;
        readonly default: () => never[];
    };
    readonly filter: {
        readonly type: import("vue").PropType<import("../transfer-types").filterValue>;
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
        readonly type: import("vue").PropType<(direction: string, data: import("../transfer-types").IItem[], keyword: TKey) => void>;
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
        readonly type: import("vue").PropType<(data: import("../transfer-types").IItem[]) => import("../transfer-types").IItem[]>;
    };
    readonly dragstart: {
        readonly type: import("vue").PropType<(event: DragEvent, item: import("../transfer-types").IItem) => void>;
    };
    readonly drop: {
        readonly type: import("vue").PropType<(event: DragEvent, item: import("../transfer-types").IItem) => void>;
    };
    readonly dragend: {
        readonly type: import("vue").PropType<(event: DragEvent, item: import("../transfer-types").IItem) => void>;
    };
    readonly onUpdateAllChecked: {
        readonly type: import("vue").PropType<(value: boolean) => void>;
    };
    readonly onChangeChecked: {
        readonly type: import("vue").PropType<([]: TKey) => void>;
    };
    readonly renderContent: {
        readonly type: import("vue").PropType<(h: import("vue").RenderFunction, option: import("../transfer-types").IItem) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>>;
    };
}>>, {
    readonly filter: import("../transfer-types").filterValue;
    readonly data: import("../transfer-types").IItem[];
    readonly height: number;
    readonly direction: string;
    readonly title: string;
    readonly unit: string;
    readonly placeholder: string;
    readonly isKeyupSearch: boolean;
    readonly defaultChecked: TKey[];
    readonly isDrag: boolean;
}>;
export default _default;
