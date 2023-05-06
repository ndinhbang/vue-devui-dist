import './tag.scss';
declare const _default: import("vue").DefineComponent<{
    readonly type: {
        readonly type: import("vue").PropType<import("./tag-types").TagType>;
        readonly default: "";
    };
    readonly color: {
        readonly type: import("vue").PropType<string>;
        readonly default: "";
    };
    readonly titleContent: {
        readonly type: import("vue").PropType<string>;
        readonly default: "";
    };
    readonly checked: {
        readonly type: import("vue").PropType<boolean>;
        readonly default: false;
    };
    readonly deletable: {
        readonly type: import("vue").PropType<boolean>;
        readonly default: false;
    };
    readonly size: {
        readonly type: import("vue").PropType<import("./tag-types").SizeType>;
        readonly default: "md";
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "tagDelete" | "checkedChange")[], "click" | "tagDelete" | "checkedChange", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly type: {
        readonly type: import("vue").PropType<import("./tag-types").TagType>;
        readonly default: "";
    };
    readonly color: {
        readonly type: import("vue").PropType<string>;
        readonly default: "";
    };
    readonly titleContent: {
        readonly type: import("vue").PropType<string>;
        readonly default: "";
    };
    readonly checked: {
        readonly type: import("vue").PropType<boolean>;
        readonly default: false;
    };
    readonly deletable: {
        readonly type: import("vue").PropType<boolean>;
        readonly default: false;
    };
    readonly size: {
        readonly type: import("vue").PropType<import("./tag-types").SizeType>;
        readonly default: "md";
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
    onTagDelete?: ((...args: any[]) => any) | undefined;
    onCheckedChange?: ((...args: any[]) => any) | undefined;
}, {
    readonly type: import("./tag-types").TagType;
    readonly color: string;
    readonly size: import("./tag-types").SizeType;
    readonly checked: boolean;
    readonly titleContent: string;
    readonly deletable: boolean;
}>;
export default _default;
