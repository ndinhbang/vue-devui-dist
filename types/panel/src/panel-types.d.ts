import { ExtractPropTypes } from 'vue';
export declare type PanelType = 'default' | 'primary' | 'success' | 'danger' | 'warning' | 'info';
export declare const panelProps: {
    type: {
        type: () => PanelType;
        default: string;
    };
    cssClass: {
        type: StringConstructor;
        default: string;
    };
    isCollapsed: {
        type: BooleanConstructor;
        default: boolean;
    };
    beforeToggle: {
        type: () => (value: boolean, done?: (() => void) | undefined) => unknown;
        default: null;
    };
    showAnimation: {
        type: BooleanConstructor;
        default: boolean;
    };
    hasLeftPadding: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare type PanelProps = ExtractPropTypes<typeof panelProps>;
