import { ExtractPropTypes, PropType, Slots } from 'vue';
export declare const tabProps: {
    readonly title: {
        readonly type: PropType<string | number>;
        readonly default: null;
    };
    readonly id: {
        readonly type: StringConstructor;
        readonly default: null;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly closeable: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
};
export declare type TabProps = ExtractPropTypes<typeof tabProps>;
export interface TabContext {
    uid: number | undefined;
    slots: Slots;
    props: TabProps;
}
