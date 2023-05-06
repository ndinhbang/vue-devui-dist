import type { CSSProperties } from 'vue';
import { ExtractPropTypes, PropType, VNode } from 'vue';
declare type PositionType = CSSProperties['position'];
export interface LoadingType {
    value: Promise<unknown> | Array<Promise<unknown>> | undefined;
}
export interface BindingType extends LoadingType {
    [key: string]: unknown;
}
declare class View {
    top?: string;
    left?: string;
}
export declare const loadingProps: {
    readonly message: StringConstructor;
    readonly backdrop: BooleanConstructor;
    readonly view: {
        readonly type: PropType<View>;
        readonly default: () => View;
    };
    readonly zIndex: NumberConstructor;
    readonly isFull: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
};
export declare class LoadingOptions {
    target?: Element | null;
    message?: string;
    loadingTemplateRef?: VNode['component'];
    backdrop?: boolean;
    positionType?: PositionType;
    view?: View;
    zIndex?: number;
}
export declare type LoadingProps = ExtractPropTypes<typeof loadingProps>;
export interface TargetHTMLElement extends HTMLElement {
    mask?: HTMLElement;
    instance?: VNode['component'];
    options?: LoadingOptions;
}
export {};
