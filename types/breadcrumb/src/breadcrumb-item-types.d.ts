import type { ExtractPropTypes, PropType } from 'vue';
export interface MenuConfig {
    title: string;
    link: string;
    target?: string;
}
export declare const breadcrumbItemProps: {
    /**
     * 可选，是否需要显示下拉箭头及下拉列表内容
     */
    readonly showMenu: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    /**
     * 可选，showMenu 为 true 时传入，下拉列表的显示内容
     */
    readonly menuList: {
        readonly type: PropType<MenuConfig[]>;
    };
    /**
     * 可选，showMenu 为 true 时传入，下拉列表是否需要搜索功能
     */
    readonly isSearch: {
        readonly type: BooleanConstructor;
        readonly dafault: false;
    };
    /**
     * 路由跳转对象，同 vue-router 的 to
     */
    readonly to: {
        readonly type: PropType<string | Record<string, unknown>>;
        readonly default: "";
    };
    /**
     * 在使用 to 进行路由跳转时，启用 replace 将不会向 history 添加新记录
     */
    readonly replace: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
};
export declare type BreadcrumbItemProps = ExtractPropTypes<typeof breadcrumbItemProps>;
