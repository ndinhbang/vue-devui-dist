import type { ComputedRef, ExtractPropTypes, PropType, Ref } from 'vue';
import type { TabContext } from './components/tab/tab-types';
export declare type Active = string | number | null;
export declare type ITabsType = 'tabs' | 'pills' | 'options' | 'wrapped' | 'slider';
export declare type ITabPositionType = 'top' | 'right' | 'bottom' | 'left';
export declare type TabsStateData = TabContext & {
    tabId?: string;
    tabsEle?: Ref<Document>;
};
export interface TabsState {
    data: Record<number, TabContext>;
    showContent: boolean;
    active: string | number;
}
export interface TabsData {
    state: TabsState;
    addTab(ctx: TabContext): void;
    deleteTab(id: number | undefined): void;
}
export declare const tabsProps: {
    readonly modelValue: {
        readonly type: PropType<string | number>;
        readonly default: null;
    };
    readonly type: {
        readonly type: () => ITabsType;
        readonly default: "tabs";
    };
    readonly showContent: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly reactivable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly customWidth: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly cssClass: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly beforeChange: {
        readonly type: PropType<(id: Active) => boolean>;
        readonly default: null;
    };
    readonly closeable: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly addable: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly tabPosition: {
        readonly type: () => ITabPositionType;
        readonly default: "top";
    };
};
export declare type TabsProps = ExtractPropTypes<typeof tabsProps>;
export interface UseTabsEvent {
    onUpdateModelValue: (value: string | number) => void;
    onActiveTabChange: (value: string) => void;
    onTabRemove: (item: TabsStateData, ev: MouseEvent) => void;
    onTabAdd: () => void;
    onTabChange: (id: string | undefined, type: string) => void;
}
export interface UseTabsRender {
    tabsClasses: ComputedRef<Record<string, boolean>>;
}
