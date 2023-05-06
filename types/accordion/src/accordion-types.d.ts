import { ExtractPropTypes } from 'vue';
import { AccordionMenuType } from './accordion.type';
export declare const accordionProps: {
    readonly data: {
        readonly type: () => AccordionMenuType;
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
    /** 高级选项和模板 */
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
        readonly type: () => 'routerLink' | 'hrefLink' | 'dependOnLinkTypeKey' | '' | string;
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
        readonly type: () => 'normal' | 'embed';
        readonly default: "normal";
    };
};
export declare type AccordionProps = ExtractPropTypes<typeof accordionProps>;
