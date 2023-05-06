import { Ref } from 'vue';
import type { Router } from 'vue-router';
import type { ChangeRouteResult, MenuItemProps } from './menu-item-types';
export declare function initSelect(defaultSelectKeys: string[], keys: string, isMultiple: boolean, disabled: Ref<boolean>): boolean;
export declare function addActiveParent(ele: HTMLElement): HTMLElement;
export declare function changeRoute(props: MenuItemProps, router: Router, useRouter: boolean, key: string): ChangeRouteResult | undefined;
export declare function changeSelect(isMultiple: boolean, defaultSelectKeys: string[], key: string): string[];
