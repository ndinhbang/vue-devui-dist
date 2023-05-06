declare type AccordionMenuItemLinkType = 'routerLink' | 'hrefLink' | string;
export interface AccordionBase {
    title: string;
    disabled?: boolean;
    [prop: string]: unknown;
}
interface IAccordionActiveable {
    active?: boolean;
}
interface IAccordionFoldable<T> {
    open?: boolean;
    loading?: boolean;
    children?: Array<T>;
}
interface IAccordionLinkable {
    link?: string;
    target?: boolean;
    linkType?: AccordionMenuItemLinkType;
}
export interface AccordionBaseItem extends AccordionBase, IAccordionActiveable {
}
export interface AccordionBaseMenu<T> extends AccordionBase, IAccordionFoldable<T> {
}
export interface AccordionLinkableItem extends AccordionBase, IAccordionActiveable, IAccordionLinkable {
}
export interface AccordionMenuItem extends AccordionBase, IAccordionActiveable, IAccordionFoldable<AccordionMenuItem>, IAccordionLinkable {
}
export declare type AccordionMenuType = Array<AccordionMenuItem>;
export interface AccordionMenuToggleEvent {
    item: AccordionMenuItem;
    open: boolean;
    parent: AccordionMenuItem;
    event: MouseEvent;
}
export interface AccordionItemClickEvent {
    item: AccordionLinkableItem;
    prevActiveItem?: AccordionMenuItem;
    parent: AccordionLinkableItem;
    event: MouseEvent;
}
/** @deprecated  merge into `AccordionMenuItem`*/
export interface AccordionSubMenuItem {
    title: string;
    active?: boolean;
    disabled?: boolean;
    [prop: string]: unknown;
}
/** @deprecated  use `AccordionLinkableItem` instead*/
export interface AccordionSubMenuItemHrefLink {
    title: string;
    link: string;
    target?: string;
    active?: boolean;
    disabled?: boolean;
    [prop: string]: unknown;
}
/** @deprecated  use `AccordionLinkableItem` instead*/
export interface AccordionSubMenuItemRouterLink {
    title: string;
    link: string;
    target?: string;
    active?: boolean;
    disabled?: boolean;
    [prop: string]: unknown;
}
/** @deprecated  use `AccordionLinkableItem` instead*/
export interface AccordionSubMenuItemDynamicLink {
    title: string;
    link: string;
    linkType: 'routerLink' | 'hrefLink' | string;
    target?: string;
    active?: boolean;
    disabled?: boolean;
    [prop: string]: unknown;
}
export interface IAccordionContext {
    itemClickFn: (itemEvent: AccordionItemClickEvent) => void;
    linkItemClickFn: (itemEvent: AccordionItemClickEvent) => void;
    menuToggleFn: (menuEvent: AccordionMenuToggleEvent) => void;
}
export {};
