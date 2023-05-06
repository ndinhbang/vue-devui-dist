import './accordion.scss';
declare const _default: import("vue").DefineComponent<{
    readonly data: {
        readonly type: () => import("./accordion.type").AccordionMenuType;
        readonly default: null;
    };
    readonly titleKey: {
        readonly type: StringConstructor;
        readonly default: "title";
    };
    readonly loadingKey: {
        readonly type: StringConstructor;
        readonly default: "loading";
    };
    readonly childrenKey: {
        readonly type: StringConstructor;
        readonly default: "children";
    };
    readonly disabledKey: {
        readonly type: StringConstructor;
        readonly default: "disabled";
    };
    readonly activeKey: {
        readonly type: StringConstructor;
        readonly default: "active";
    };
    readonly openKey: {
        readonly type: StringConstructor;
        readonly default: "open";
    };
    readonly menuItemTemplate: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly itemTemplate: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly menuToggle: {
        readonly type: () => (event: MouseEvent) => void;
        readonly default: null;
    };
    readonly itemClick: {
        readonly type: () => (event: MouseEvent) => void;
        readonly default: null;
    };
    readonly activeItemChange: {
        readonly type: () => (event: MouseEvent) => void;
        readonly default: null;
    };
    readonly restrictOneOpen: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly autoOpenActiveMenu: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly showNoContent: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly noContentTemplate: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly loadingTemplate: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly innerListTemplate: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly linkType: {
        readonly type: () => string;
        readonly default: "";
    };
    readonly linkTypeKey: {
        readonly type: StringConstructor;
        readonly default: "linkType";
    };
    readonly linkKey: {
        readonly type: StringConstructor;
        readonly default: "link";
    };
    readonly linkTargetKey: {
        readonly type: StringConstructor;
        readonly default: "target";
    };
    readonly linkDefaultTarget: {
        readonly type: StringConstructor;
        readonly default: "_self";
    };
    readonly accordionType: {
        readonly type: () => "normal" | "embed";
        readonly default: "normal";
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly data: {
        readonly type: () => import("./accordion.type").AccordionMenuType;
        readonly default: null;
    };
    readonly titleKey: {
        readonly type: StringConstructor;
        readonly default: "title";
    };
    readonly loadingKey: {
        readonly type: StringConstructor;
        readonly default: "loading";
    };
    readonly childrenKey: {
        readonly type: StringConstructor;
        readonly default: "children";
    };
    readonly disabledKey: {
        readonly type: StringConstructor;
        readonly default: "disabled";
    };
    readonly activeKey: {
        readonly type: StringConstructor;
        readonly default: "active";
    };
    readonly openKey: {
        readonly type: StringConstructor;
        readonly default: "open";
    };
    readonly menuItemTemplate: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly itemTemplate: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly menuToggle: {
        readonly type: () => (event: MouseEvent) => void;
        readonly default: null;
    };
    readonly itemClick: {
        readonly type: () => (event: MouseEvent) => void;
        readonly default: null;
    };
    readonly activeItemChange: {
        readonly type: () => (event: MouseEvent) => void;
        readonly default: null;
    };
    readonly restrictOneOpen: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly autoOpenActiveMenu: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly showNoContent: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly noContentTemplate: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly loadingTemplate: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly innerListTemplate: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly linkType: {
        readonly type: () => string;
        readonly default: "";
    };
    readonly linkTypeKey: {
        readonly type: StringConstructor;
        readonly default: "linkType";
    };
    readonly linkKey: {
        readonly type: StringConstructor;
        readonly default: "link";
    };
    readonly linkTargetKey: {
        readonly type: StringConstructor;
        readonly default: "target";
    };
    readonly linkDefaultTarget: {
        readonly type: StringConstructor;
        readonly default: "_self";
    };
    readonly accordionType: {
        readonly type: () => "normal" | "embed";
        readonly default: "normal";
    };
}>>, {
    readonly data: import("./accordion.type").AccordionMenuType;
    readonly linkType: string;
    readonly titleKey: string;
    readonly loadingKey: string;
    readonly childrenKey: string;
    readonly disabledKey: string;
    readonly activeKey: string;
    readonly openKey: string;
    readonly menuItemTemplate: boolean;
    readonly itemTemplate: boolean;
    readonly menuToggle: (event: MouseEvent) => void;
    readonly itemClick: (event: MouseEvent) => void;
    readonly activeItemChange: (event: MouseEvent) => void;
    readonly restrictOneOpen: boolean;
    readonly autoOpenActiveMenu: boolean;
    readonly showNoContent: boolean;
    readonly noContentTemplate: boolean;
    readonly loadingTemplate: boolean;
    readonly innerListTemplate: boolean;
    readonly linkTypeKey: string;
    readonly linkKey: string;
    readonly linkTargetKey: string;
    readonly linkDefaultTarget: string;
    readonly accordionType: "normal" | "embed";
}>;
export default _default;
