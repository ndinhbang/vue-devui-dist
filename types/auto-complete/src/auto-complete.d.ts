import './auto-complete.scss';
declare const _default: import("vue").DefineComponent<{
    readonly modelValue: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly source: {
        readonly type: import("vue").PropType<import("./auto-complete-types").SourceType>;
        readonly default: null;
    };
    readonly allowEmptyValueSearch: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly appendToBody: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly position: {
        readonly type: import("vue").PropType<import("./auto-complete-types").Placement[]>;
        readonly default: readonly ["bottom-end"];
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly delay: {
        readonly type: NumberConstructor;
        readonly default: 300;
    };
    readonly disabledKey: {
        readonly type: StringConstructor;
        readonly default: null;
    };
    readonly formatter: {
        readonly type: import("vue").PropType<(item: string | import("./auto-complete-types").SourceItemObj) => string>;
        readonly default: (item: string | import("./auto-complete-types").SourceItemObj) => string;
    };
    readonly isSearching: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly sceneType: {
        readonly type: StringConstructor;
        readonly default: null;
    };
    readonly searchFn: {
        readonly type: import("vue").PropType<(term: string) => import("./auto-complete-types").SourceType>;
        readonly default: null;
    };
    readonly tipsText: {
        readonly type: StringConstructor;
        readonly default: "最近输入";
    };
    readonly latestSource: {
        readonly type: ArrayConstructor;
        readonly default: null;
    };
    readonly valueParser: {
        readonly type: import("vue").PropType<(item: string | import("./auto-complete-types").SourceItemObj) => string>;
        readonly default: (item: string | import("./auto-complete-types").SourceItemObj) => string | import("./auto-complete-types").SourceItemObj;
    };
    readonly enableLazyLoad: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly width: {
        readonly type: NumberConstructor;
        readonly default: 400;
    };
    readonly showAnimation: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly maxHeight: {
        readonly type: NumberConstructor;
        readonly default: 300;
    };
    readonly transInputFocusEmit: {
        readonly type: import("vue").PropType<() => void>;
        readonly default: null;
    };
    readonly selectValue: {
        readonly type: import("vue").PropType<(val: string) => string>;
        readonly default: null;
    };
    readonly loadMore: {
        readonly type: import("vue").PropType<() => void>;
        readonly default: null;
    };
    readonly placeholder: {
        readonly type: StringConstructor;
        readonly default: "Search";
    };
    readonly prefix: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly suffix: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly size: {
        readonly type: import("vue").PropType<import("./auto-complete-types").AutoCompleteSize>;
        readonly default: "md";
    };
    readonly clearable: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "clear" | "blur" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly source: {
        readonly type: import("vue").PropType<import("./auto-complete-types").SourceType>;
        readonly default: null;
    };
    readonly allowEmptyValueSearch: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly appendToBody: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly position: {
        readonly type: import("vue").PropType<import("./auto-complete-types").Placement[]>;
        readonly default: readonly ["bottom-end"];
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly delay: {
        readonly type: NumberConstructor;
        readonly default: 300;
    };
    readonly disabledKey: {
        readonly type: StringConstructor;
        readonly default: null;
    };
    readonly formatter: {
        readonly type: import("vue").PropType<(item: string | import("./auto-complete-types").SourceItemObj) => string>;
        readonly default: (item: string | import("./auto-complete-types").SourceItemObj) => string;
    };
    readonly isSearching: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly sceneType: {
        readonly type: StringConstructor;
        readonly default: null;
    };
    readonly searchFn: {
        readonly type: import("vue").PropType<(term: string) => import("./auto-complete-types").SourceType>;
        readonly default: null;
    };
    readonly tipsText: {
        readonly type: StringConstructor;
        readonly default: "最近输入";
    };
    readonly latestSource: {
        readonly type: ArrayConstructor;
        readonly default: null;
    };
    readonly valueParser: {
        readonly type: import("vue").PropType<(item: string | import("./auto-complete-types").SourceItemObj) => string>;
        readonly default: (item: string | import("./auto-complete-types").SourceItemObj) => string | import("./auto-complete-types").SourceItemObj;
    };
    readonly enableLazyLoad: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly width: {
        readonly type: NumberConstructor;
        readonly default: 400;
    };
    readonly showAnimation: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly maxHeight: {
        readonly type: NumberConstructor;
        readonly default: 300;
    };
    readonly transInputFocusEmit: {
        readonly type: import("vue").PropType<() => void>;
        readonly default: null;
    };
    readonly selectValue: {
        readonly type: import("vue").PropType<(val: string) => string>;
        readonly default: null;
    };
    readonly loadMore: {
        readonly type: import("vue").PropType<() => void>;
        readonly default: null;
    };
    readonly placeholder: {
        readonly type: StringConstructor;
        readonly default: "Search";
    };
    readonly prefix: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly suffix: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly size: {
        readonly type: import("vue").PropType<import("./auto-complete-types").AutoCompleteSize>;
        readonly default: "md";
    };
    readonly clearable: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
}>>, {
    readonly source: import("./auto-complete-types").SourceType;
    readonly width: number;
    readonly maxHeight: number;
    readonly position: import("./auto-complete-types").Placement[];
    readonly prefix: string;
    readonly disabled: boolean;
    readonly size: import("./auto-complete-types").AutoCompleteSize;
    readonly placeholder: string;
    readonly disabledKey: string;
    readonly modelValue: string;
    readonly allowEmptyValueSearch: boolean;
    readonly appendToBody: boolean;
    readonly delay: number;
    readonly formatter: (item: string | import("./auto-complete-types").SourceItemObj) => string;
    readonly isSearching: boolean;
    readonly sceneType: string;
    readonly searchFn: (term: string) => import("./auto-complete-types").SourceType;
    readonly tipsText: string;
    readonly latestSource: unknown[];
    readonly valueParser: (item: string | import("./auto-complete-types").SourceItemObj) => string;
    readonly enableLazyLoad: boolean;
    readonly showAnimation: boolean;
    readonly transInputFocusEmit: () => void;
    readonly selectValue: (val: string) => string;
    readonly loadMore: () => void;
    readonly suffix: string;
    readonly clearable: boolean;
}>;
export default _default;
