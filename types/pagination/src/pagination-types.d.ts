import type { PropType, ExtractPropTypes, InjectionKey, Ref, WritableComputedRef } from 'vue';
declare type AppendToBodyDirection = 'rightDown' | 'rightUp' | 'leftUp' | 'leftDown' | 'centerDown' | 'centerUp';
interface ConnectedPosition {
    originX: 'start' | 'center' | 'end';
    originY: 'top' | 'center' | 'bottom';
    overlayX: 'start' | 'center' | 'end';
    overlayY: 'top' | 'center' | 'bottom';
    weight?: number;
    offsetX?: number;
    offsetY?: number;
    panelClass?: string | string[];
}
declare type Size = 'lg' | '' | 'sm';
export declare const paginationProps: {
    readonly pageSize: {
        readonly type: NumberConstructor;
        readonly default: 10;
    };
    readonly total: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly pageSizeOptions: {
        readonly type: PropType<number[]>;
        readonly default: () => number[];
    };
    readonly pageSizeDirection: {
        readonly type: PropType<(AppendToBodyDirection | ConnectedPosition)[]>;
        readonly default: () => string[];
    };
    readonly pageIndex: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly maxItems: {
        readonly type: NumberConstructor;
        readonly default: 10;
    };
    readonly preLink: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly nextLink: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly size: {
        readonly type: PropType<Size>;
        readonly default: "";
    };
    readonly canJumpPage: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly canChangePageSize: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly canViewTotal: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly totalItemText: {
        readonly type: StringConstructor;
    };
    readonly goToText: {
        readonly type: StringConstructor;
    };
    readonly showJumpButton: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly showTruePageIndex: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly lite: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly showPageSelector: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly haveConfigMenu: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly autoFixPageIndex: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly autoHide: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly 'onUpdate:pageIndex': {
        readonly type: PropType<(v: number) => void>;
    };
    readonly 'onUpdate:pageSize': {
        readonly type: PropType<(v: number) => void>;
    };
    readonly onPageIndexChange: {
        readonly type: PropType<(v: number) => void>;
    };
    readonly onPageSizeChange: {
        readonly type: PropType<(v: number) => void>;
    };
};
export declare type PaginationProps = ExtractPropTypes<typeof paginationProps>;
export interface IPagination {
    size: Ref<Size>;
    currentPageSize: WritableComputedRef<number>;
    pageSizeOptions: Ref<number[]>;
    pageSizeChange: (val: Record<string, string | number>) => void;
    t: (path: string) => void;
}
export declare const paginationInjectionKey: InjectionKey<IPagination>;
export {};
