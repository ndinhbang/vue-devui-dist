import type { ExtractPropTypes, PropType } from 'vue';
export interface breadcrumbChildren {
    title: string;
    link: string;
    target?: string;
}
export interface SourceConfig {
    title: string;
    link?: string;
    target?: string;
    noNavigation?: boolean;
    linkType?: 'hrefLink' | 'routerLink';
    replace: boolean;
    children?: breadcrumbChildren[];
    showMenu?: boolean;
}
export declare const breadcrumbProps: {
    /**
     * 可选，面包屑根据配置的 source 按照默认渲染方式显示
     */
    readonly source: {
        readonly type: PropType<SourceConfig[]>;
        readonly default: readonly [];
    };
    /**
     * 可选，自定义分隔符样式
     */
    readonly separatorIcon: {
        readonly type: StringConstructor;
    };
};
export declare type BreadcrumbProps = ExtractPropTypes<typeof breadcrumbProps>;
