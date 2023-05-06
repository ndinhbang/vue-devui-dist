import type { PropType, ExtractPropTypes, CSSProperties, VNodeTypes } from 'vue';
interface ResizeObserverSize {
    width: number;
    height: number;
    offsetWidth: number;
    offsetHeight: number;
}
export declare const virtualListProps: {
    readonly data: {
        readonly type: PropType<Record<string, never>[]>;
        readonly default: () => never[];
    };
    readonly component: {
        readonly type: StringConstructor;
        readonly default: "div";
    };
    readonly height: {
        readonly type: NumberConstructor;
        readonly default: 100;
    };
    readonly itemHeight: {
        readonly type: NumberConstructor;
        readonly default: 20;
    };
    readonly virtual: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly fullHeight: {
        readonly type: BooleanConstructor;
    };
    readonly itemKey: {
        readonly type: PropType<string | number | ((item: Record<string, never>) => string | number)>;
    };
};
export declare const resizeObserverContainerProps: {
    readonly height: {
        readonly type: NumberConstructor;
    };
    readonly offset: {
        readonly type: NumberConstructor;
    };
    readonly disabled: {
        readonly type: PropType<() => void>;
    };
    readonly onInnerResize: {
        readonly type: PropType<() => void>;
    };
};
export declare const scrollBarProps: {
    readonly scrollTop: {
        readonly type: NumberConstructor;
    };
    readonly scrollHeight: {
        readonly type: NumberConstructor;
    };
    readonly height: {
        readonly type: NumberConstructor;
    };
    readonly count: {
        readonly type: NumberConstructor;
    };
    readonly onScroll: {
        readonly type: PropType<(scrollTop: number) => void>;
    };
    readonly onStartMove: {
        readonly type: PropType<() => void>;
    };
    readonly onStopMove: {
        readonly type: PropType<() => void>;
    };
};
export declare const resizeObserverProps: {
    readonly disabled: {
        readonly type: BooleanConstructor;
    };
    readonly onResize: {
        readonly type: PropType<(size: ResizeObserverSize, element: HTMLElement) => void>;
    };
};
export declare type RenderFunc<T> = (item: T, index: number, props: {
    style?: CSSProperties;
}) => VNodeTypes;
export interface SharedConfig<T> {
    getKey: (item: T) => string | number | undefined;
}
export interface IScrollBarExposeFunction {
    onShowBar?: () => void;
}
export declare type GetKey<T = Record<string, never>> = (item: T) => string | number | undefined;
export declare type CacheMap = Map<unknown, number>;
export declare type VirtualListProps = ExtractPropTypes<typeof virtualListProps>;
export {};
