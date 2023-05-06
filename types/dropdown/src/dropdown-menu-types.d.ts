import type { PropType, ExtractPropTypes } from 'vue';
export declare type CloseScopeArea = 'all' | 'blank' | 'none';
export declare type Placement = 'top' | 'right' | 'bottom' | 'left' | 'top-start' | 'top-end' | 'right-start' | 'right-end' | 'bottom-start' | 'bottom-end' | 'left-start' | 'left-end';
export declare type Alignment = 'start' | 'end';
export declare type OffsetOptions = {
    mainAxis?: number;
    crossAxis?: number;
};
export declare const dropdownMenuProps: {
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    origin: {
        type: PropType<HTMLElement>;
        require: boolean;
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
    clickOutside: {
        type: PropType<() => boolean>;
        default: () => boolean;
    };
    showAnimation: {
        type: BooleanConstructor;
        default: boolean;
    };
    overlayClass: {
        type: StringConstructor;
        default: string;
    };
};
export declare type DropdownMenuProps = ExtractPropTypes<typeof dropdownMenuProps>;
