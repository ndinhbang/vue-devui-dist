import { TKey, IItem } from './transfer-types';
import './transfer.scss';
declare const _default: import("vue").DefineComponent<{
    readonly modelValue: {
        readonly type: import("vue").PropType<string | number[]>;
        readonly default: () => never[];
    };
    readonly data: {
        readonly type: import("vue").PropType<IItem[]>;
        readonly default: () => never[];
    };
    readonly sourceDefaultChecked: {
        readonly type: import("vue").PropType<string | number[]>;
        readonly default: () => never[];
    };
    readonly targetDefaultChecked: {
        readonly type: import("vue").PropType<string | number[]>;
        readonly default: () => never[];
    };
    readonly titles: {
        readonly type: import("vue").PropType<string[]>;
        readonly default: () => string[];
    };
    readonly sourceOption: {
        readonly type: import("vue").PropType<IItem[]>;
        readonly default: () => never[];
    };
    readonly targetOption: {
        readonly type: import("vue").PropType<IItem[]>;
        readonly default: () => never[];
    };
    readonly filter: {
        readonly type: import("vue").PropType<import("./transfer-types").filterValue>;
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
        readonly type: import("vue").PropType<(data: IItem[], keyword: TKey) => void>;
    };
    readonly sortMethods: {
        readonly type: import("vue").PropType<(data: IItem[]) => IItem[]>;
    };
    readonly dragstart: {
        readonly type: import("vue").PropType<(event: DragEvent, item: IItem) => void>;
    };
    readonly drop: {
        readonly type: import("vue").PropType<(event: DragEvent, item: IItem) => void>;
    };
    readonly dragend: {
        readonly type: import("vue").PropType<(event: DragEvent, item: IItem) => void>;
    };
    readonly renderContent: {
        readonly type: import("vue").PropType<(h: import("vue").RenderFunction, option: IItem) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>>;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "change" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: {
        readonly type: import("vue").PropType<string | number[]>;
        readonly default: () => never[];
    };
    readonly data: {
        readonly type: import("vue").PropType<IItem[]>;
        readonly default: () => never[];
    };
    readonly sourceDefaultChecked: {
        readonly type: import("vue").PropType<string | number[]>;
        readonly default: () => never[];
    };
    readonly targetDefaultChecked: {
        readonly type: import("vue").PropType<string | number[]>;
        readonly default: () => never[];
    };
    readonly titles: {
        readonly type: import("vue").PropType<string[]>;
        readonly default: () => string[];
    };
    readonly sourceOption: {
        readonly type: import("vue").PropType<IItem[]>;
        readonly default: () => never[];
    };
    readonly targetOption: {
        readonly type: import("vue").PropType<IItem[]>;
        readonly default: () => never[];
    };
    readonly filter: {
        readonly type: import("vue").PropType<import("./transfer-types").filterValue>;
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
        readonly type: import("vue").PropType<(data: IItem[], keyword: TKey) => void>;
    };
    readonly sortMethods: {
        readonly type: import("vue").PropType<(data: IItem[]) => IItem[]>;
    };
    readonly dragstart: {
        readonly type: import("vue").PropType<(event: DragEvent, item: IItem) => void>;
    };
    readonly drop: {
        readonly type: import("vue").PropType<(event: DragEvent, item: IItem) => void>;
    };
    readonly dragend: {
        readonly type: import("vue").PropType<(event: DragEvent, item: IItem) => void>;
    };
    readonly renderContent: {
        readonly type: import("vue").PropType<(h: import("vue").RenderFunction, option: IItem) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>>;
    };
}>>, {
    readonly filter: import("./transfer-types").filterValue;
    readonly data: IItem[];
    readonly height: number;
    readonly unit: string;
    readonly placeholder: string;
    readonly modelValue: string | number[];
    readonly isKeyupSearch: boolean;
    readonly sourceDefaultChecked: string | number[];
    readonly targetDefaultChecked: string | number[];
    readonly titles: string[];
    readonly sourceOption: IItem[];
    readonly targetOption: IItem[];
    readonly isSourceDrag: boolean;
    readonly isTargetDrag: boolean;
}>;
export default _default;
