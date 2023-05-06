import type { PropType, ExtractPropTypes, Ref, ComputedRef } from 'vue';
export declare type TriggerType = 'click' | 'hover' | 'manually';
export declare type CloseScopeArea = 'all' | 'blank' | 'none';
export declare type Placement = 'top' | 'right' | 'bottom' | 'left' | 'top-start' | 'top-end' | 'right-start' | 'right-end' | 'bottom-start' | 'bottom-end' | 'left-start' | 'left-end';
export declare type Alignment = 'start' | 'end';
export declare type OffsetOptions = {
    mainAxis?: number;
    crossAxis?: number;
};
export declare type EmitEvent = (event: 'toggle', result: boolean) => void;
export declare const dropdownProps: {
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    trigger: {
        type: PropType<TriggerType>;
        default: string;
    };
    closeScope: {
        type: PropType<CloseScopeArea>;
        default: string;
    };
    position: {
        type: PropType<Placement[]>;
        default: string[];
    };
    align: {
        type: PropType<Alignment> | null;
        default: null;
    };
    offset: {
        type: PropType<number | OffsetOptions>;
        default: number;
    };
    shiftOffset: {
        type: NumberConstructor;
    };
    closeOnMouseLeaveMenu: {
        type: BooleanConstructor;
        default: boolean;
    };
    showAnimation: {
        type: BooleanConstructor;
        default: boolean;
    };
    overlayClass: {
        type: StringConstructor;
        default: string;
    };
    destroyOnHide: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare type DropdownProps = ExtractPropTypes<typeof dropdownProps>;
export interface UseDropdownProps {
    id: string;
    isOpen: Ref<boolean>;
    origin: Ref<HTMLElement | undefined>;
    dropdownRef: Ref<HTMLElement | undefined>;
    props: DropdownProps;
    emit: EmitEvent;
}
export interface UseOverlayFn {
    overlayModelValue: Ref<boolean>;
    overlayShowValue: Ref<boolean>;
    styles: ComputedRef<Record<string, string>>;
    classes: ComputedRef<Record<string, boolean>>;
    handlePositionChange: (pos: string) => void;
}
