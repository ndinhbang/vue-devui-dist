import { ExtractPropTypes, PropType } from 'vue';
import { CollapseDirection } from '../splitter-types';
export declare const splitterPaneProps: {
    /**
     * 可选，指定 pane 宽度，设置像素值或者百分比
     * pane初始化大小
     */
    readonly size: {
        readonly type: StringConstructor;
    };
    /**
     * 可选，指定 pane 最小宽度，设置像素值或者百分比
     */
    readonly minSize: {
        readonly type: StringConstructor;
    };
    /**
     * 可选，指定 pane 最大宽度，设置像素值或者百分比
     */
    readonly maxSize: {
        readonly type: StringConstructor;
    };
    /**
     * 可选，指定 pane 是否可调整大小，会影响相邻 pane
     */
    readonly resizable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    /**
     * 可选，指定 pane 是否可折叠收起
     */
    readonly collapsible: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    /**
     * 可选，指定 pane 初始化是否收起，配合 collapsible 使用
     */
    readonly collapsed: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    /**
     * 非边缘面板折叠方向，before 只生成向前折叠的按钮，after 生成向后折叠按钮，both 生成两个
     */
    readonly collapseDirection: {
        readonly type: PropType<CollapseDirection>;
        readonly default: "both";
    };
    /**
     * 可选，是否在 pane 进行折叠后收缩 pane 宽度而非收起
     */
    readonly shrink: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    /**
     * 可选，折叠后收缩的 pane 宽度 （单位：px）
     */
    readonly shrinkWidth: {
        readonly type: NumberConstructor;
        readonly default: 36;
    };
};
export declare type SplitterPaneProps = ExtractPropTypes<typeof splitterPaneProps>;
