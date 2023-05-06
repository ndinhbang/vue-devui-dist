import type { Ref, ComputedRef } from 'vue';
import { PopoverProps, UsePopoverEvent } from './popover-types';
export declare function usePopover(props: PopoverProps, visible: Ref<boolean>, placement: Ref<string>, origin: Ref<HTMLElement | undefined>, popoverRef: Ref): {
    overlayStyles: ComputedRef<Record<string, number | string>>;
};
export declare function usePopoverEvent(props: PopoverProps, visible: Ref<boolean>, origin: Ref): UsePopoverEvent;
