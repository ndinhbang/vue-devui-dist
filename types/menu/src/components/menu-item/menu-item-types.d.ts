import type { ExtractPropTypes, PropType } from 'vue';
import type { NavigationFailure, RouteLocationRaw } from 'vue-router';
export declare const menuItemProps: {
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly href: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly route: {
        readonly type: PropType<RouteLocationRaw>;
    };
};
export declare type MenuItemProps = ExtractPropTypes<typeof menuItemProps>;
export interface ChangeRouteResult {
    route: RouteLocationRaw;
    routerResult: Promise<void | NavigationFailure | undefined>;
}
