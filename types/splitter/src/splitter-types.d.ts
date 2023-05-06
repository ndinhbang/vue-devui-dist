import type { PropType, ExtractPropTypes, VNode } from 'vue';
export declare type SplitterOrientation = 'vertical' | 'horizontal';
export declare type CollapseDirection = 'before' | 'after' | 'both';
export declare const splitterProps: {
    /**
     * 可选，指定 Splitter 分割方向,可选值'vertical'|'horizontal'
     */
    readonly orientation: {
        readonly type: PropType<SplitterOrientation>;
        readonly default: "horizontal";
    };
    /**
     * 可选，分隔条大小，默认 2px
     */
    readonly splitBarSize: {
        readonly type: StringConstructor;
        readonly default: "2px";
    };
    /**
     * 可选，pane 设置不可调整宽度时生效
     */
    readonly disabledBarSize: {
        readonly type: StringConstructor;
        readonly default: "1px";
    };
    /**
     * 是否显示展开/收缩按钮
     */
    readonly showCollapseButton: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
};
export declare type SplitterProps = ExtractPropTypes<typeof splitterProps>;
export interface SplitterState {
    panes: VNode[];
}
