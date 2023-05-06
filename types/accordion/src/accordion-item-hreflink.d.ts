import type { AccordionMenuItem, AccordionLinkableItem } from './accordion.type';
declare const _default: import("vue").DefineComponent<{
    data: {
        readonly type: () => import("./accordion.type").AccordionMenuType;
        readonly default: null;
    };
    titleKey: {
        readonly type: StringConstructor;
        readonly default: "title";
    };
    loadingKey: {
        readonly type: StringConstructor;
        readonly default: "loading";
    };
    childrenKey: {
        readonly type: StringConstructor;
        readonly default: "children";
    };
    disabledKey: {
        readonly type: StringConstructor;
        readonly default: "disabled";
    };
    activeKey: {
        readonly type: StringConstructor;
        readonly default: "active";
    };
    openKey: {
        readonly type: StringConstructor;
        readonly default: "open";
    };
    menuItemTemplate: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    itemTemplate: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    menuToggle: {
        readonly type: () => (event: MouseEvent) => void;
        readonly default: null;
    };
    itemClick: {
        readonly type: () => (event: MouseEvent) => void;
        readonly default: null;
    };
    activeItemChange: {
        readonly type: () => (event: MouseEvent) => void;
        readonly default: null;
    };
    restrictOneOpen: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    autoOpenActiveMenu: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    showNoContent: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    noContentTemplate: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    loadingTemplate: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    innerListTemplate: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    linkType: {
        readonly type: () => string;
        readonly default: "";
    };
    linkTypeKey: {
        readonly type: StringConstructor;
        readonly default: "linkType";
    };
    linkKey: {
        readonly type: StringConstructor;
        readonly default: "link";
    };
    linkTargetKey: {
        readonly type: StringConstructor;
        readonly default: "target";
    };
    linkDefaultTarget: {
        readonly type: StringConstructor;
        readonly default: "_self";
    };
    accordionType: {
        readonly type: () => "normal" | "embed";
        readonly default: "normal";
    };
    item: {
        type: () => AccordionLinkableItem;
        required: true;
    };
    deepth: {
        type: NumberConstructor;
        default: number;
    };
    parent: {
        type: () => AccordionMenuItem;
        default: null;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        readonly type: () => import("./accordion.type").AccordionMenuType;
        readonly default: null;
    };
    titleKey: {
        readonly type: StringConstructor;
        readonly default: "title";
    };
    loadingKey: {
        readonly type: StringConstructor;
        readonly default: "loading";
    };
    childrenKey: {
        readonly type: StringConstructor;
        readonly default: "children";
    };
    disabledKey: {
        readonly type: StringConstructor;
        readonly default: "disabled";
    };
    activeKey: {
        readonly type: StringConstructor;
        readonly default: "active";
    };
    openKey: {
        readonly type: StringConstructor;
        readonly default: "open";
    };
    menuItemTemplate: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    itemTemplate: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    menuToggle: {
        readonly type: () => (event: MouseEvent) => void;
        readonly default: null;
    };
    itemClick: {
        readonly type: () => (event: MouseEvent) => void;
        readonly default: null;
    };
    activeItemChange: {
        readonly type: () => (event: MouseEvent) => void;
        readonly default: null;
    };
    restrictOneOpen: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    autoOpenActiveMenu: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    showNoContent: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    noContentTemplate: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    loadingTemplate: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    innerListTemplate: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    linkType: {
        readonly type: () => string;
        readonly default: "";
    };
    linkTypeKey: {
        readonly type: StringConstructor;
        readonly default: "linkType";
    };
    linkKey: {
        readonly type: StringConstructor;
        readonly default: "link";
    };
    linkTargetKey: {
        readonly type: StringConstructor;
        readonly default: "target";
    };
    linkDefaultTarget: {
        readonly type: StringConstructor;
        readonly default: "_self";
    };
    accordionType: {
        readonly type: () => "normal" | "embed";
        readonly default: "normal";
    };
    item: {
        type: () => AccordionLinkableItem;
        required: true;
    };
    deepth: {
        type: NumberConstructor;
        default: number;
    };
    parent: {
        type: () => AccordionMenuItem;
        default: null;
    };
}>>, {
    data: import("./accordion.type").AccordionMenuType;
    parent: AccordionMenuItem;
    linkType: string;
    titleKey: string;
    loadingKey: string;
    childrenKey: string;
    disabledKey: string;
    activeKey: string;
    openKey: string;
    menuItemTemplate: boolean;
    itemTemplate: boolean;
    menuToggle: (event: MouseEvent) => void;
    itemClick: (event: MouseEvent) => void;
    activeItemChange: (event: MouseEvent) => void;
    restrictOneOpen: boolean;
    autoOpenActiveMenu: boolean;
    showNoContent: boolean;
    noContentTemplate: boolean;
    loadingTemplate: boolean;
    innerListTemplate: boolean;
    linkTypeKey: string;
    linkKey: string;
    linkTargetKey: string;
    linkDefaultTarget: string;
    accordionType: "normal" | "embed";
    deepth: number;
}>;
export default _default;
