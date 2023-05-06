import { AccordionMenuItem, AccordionMenuType } from './accordion.type';
import { ComponentInternalInstance } from 'vue';
declare const flatten: (arr: Array<any>, childrenKey?: string, includeParent?: boolean, includeLeaf?: boolean) => Array<AccordionMenuItem>;
declare const precheckNodeId: (d: AccordionMenuItem) => AccordionMenuItem;
declare const precheckTree: (ds: AccordionMenuType) => AccordionMenuType;
declare const getRootSlots: () => ComponentInternalInstance['slots'] | undefined;
export { flatten, precheckNodeId, precheckTree, getRootSlots };
