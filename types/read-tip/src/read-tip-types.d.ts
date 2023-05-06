import type { PropType, ExtractPropTypes } from 'vue';
export declare type Position = 'top' | 'left' | 'right' | 'bottom';
export declare type Trigger = 'hover' | 'click';
export interface ReadTipRule {
    id?: string;
    key?: string;
    selector: string | null;
    trigger?: Trigger;
    title?: string;
    content?: string;
    showAnimate?: boolean;
    mouseenterTime?: number;
    mouseleaveTime?: number;
    position?: Position;
    overlayClassName?: string;
    appendToBody?: boolean;
    status?: boolean;
    dataFn?: ({ element, rule: ReadTipRule, }: {
        element: any;
        rule: any;
    }) => {
        title?: string;
        content?: string;
    };
}
export declare type ReadTipRules = ReadTipRule | ReadTipRule[];
export declare type DefaultTemplateProps = {
    title?: string;
    content?: string;
    selector?: string;
    position?: string;
    id?: string;
    temp?: string;
    dom?: Element;
    contentTemplate?: boolean;
    overlayClassName?: string;
    dataFn?: ({ element, rule: ReadTipRule, }: {
        element: any;
        rule: any;
    }) => {
        title?: string;
        content?: string;
    };
    appendToBody?: boolean;
};
export interface ReadTipOptions {
    trigger?: Trigger;
    showAnimate?: boolean;
    mouseenterTime?: number;
    mouseleaveTime?: number;
    position?: Position;
    overlayClassName?: string;
    appendToBody?: boolean;
    rules: ReadTipRules;
}
export declare const readTipProps: {
    readonly readTipOptions: {
        readonly type: PropType<ReadTipOptions>;
    };
    readonly defaultTemplateProps: {
        readonly type: PropType<DefaultTemplateProps>;
    };
};
export declare type ReadTipProps = ExtractPropTypes<typeof readTipProps>;
