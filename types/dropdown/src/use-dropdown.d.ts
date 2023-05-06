import type { Ref } from 'vue';
import { UseDropdownProps, EmitEvent, DropdownProps, UseOverlayFn } from './dropdown-types';
export declare const useDropdownEvent: ({ id, isOpen, origin, dropdownRef, props, emit }: UseDropdownProps) => void;
export declare function useDropdown(id: string, visible: Ref<boolean>, isOpen: Ref<boolean>, origin: Ref<HTMLElement | undefined>, dropdownRef: Ref<HTMLElement | undefined>, popDirection: Ref<string>, emit: EmitEvent): void;
export declare function useOverlayProps(props: DropdownProps, currentPosition: Ref<string>, isOpen: Ref<boolean>): UseOverlayFn;
