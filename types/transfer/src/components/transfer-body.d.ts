import { TKey } from '../transfer-types';
import '../transfer.scss';
declare const _default: import("vue").DefineComponent<{
    readonly height: {
        readonly type: NumberConstructor;
        readonly default: 320;
    };
    readonly data: {
        readonly type: import("vue").PropType<import("../transfer-types").IItem[]>;
        readonly default: () => never[];
    };
    readonly defaultChecked: {
        readonly type: import("vue").PropType<string[]>;
        readonly default: () => never[];
    };
    readonly filter: {
        readonly type: import("vue").PropType<import("../transfer-types").filterValue>;
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
        readonly type: import("vue").PropType<(data: import("../transfer-types").IItem[], keyword: TKey) => void>;
    };
    readonly isDrag: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly onChange: {
        readonly type: import("vue").PropType<(v: string[]) => void>;
        readonly default: undefined;
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
    readonly renderContent: {
        readonly type: import("vue").PropType<(h: import("vue").RenderFunction, option: import("../transfer-types").IItem) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>>;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "change" | "update:modelValue" | "updateQueryString" | "updateDataPosition", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly height: {
        readonly type: NumberConstructor;
        readonly default: 320;
    };
    readonly data: {
        readonly type: import("vue").PropType<import("../transfer-types").IItem[]>;
        readonly default: () => never[];
    };
    readonly defaultChecked: {
        readonly type: import("vue").PropType<string[]>;
        readonly default: () => never[];
    };
    readonly filter: {
        readonly type: import("vue").PropType<import("../transfer-types").filterValue>;
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
        readonly type: import("vue").PropType<(data: import("../transfer-types").IItem[], keyword: TKey) => void>;
    };
    readonly isDrag: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly onChange: {
        readonly type: import("vue").PropType<(v: string[]) => void>;
        readonly default: undefined;
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
    readonly renderContent: {
        readonly type: import("vue").PropType<(h: import("vue").RenderFunction, option: import("../transfer-types").IItem) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>>;
    };
}>>, {
    readonly filter: import("../transfer-types").filterValue;
    readonly data: import("../transfer-types").IItem[];
    readonly height: number;
    readonly onChange: (v: string[]) => void;
    readonly placeholder: string;
    readonly isKeyupSearch: boolean;
    readonly defaultChecked: string[];
    readonly isDrag: boolean;
    readonly queryString: string;
}>;
export default _default;
