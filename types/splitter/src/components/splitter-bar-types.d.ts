import { PropType, ExtractPropTypes } from 'vue';
import { SplitterOrientation } from '../splitter-types';
export declare const splitterBarProps: {
    /**
     * 当前 pane 的索引
     */
    readonly index: {
        readonly type: NumberConstructor;
    };
    /**
     * 必选，指定 SplitterBar 的方向
     */
    readonly orientation: {
        readonly type: PropType<SplitterOrientation>;
        readonly required: true;
    };
    /**
     * 分隔条大小
     */
    readonly splitBarSize: {
        readonly type: StringConstructor;
        readonly required: true;
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
    };
};
export declare type SplitterBarProps = ExtractPropTypes<typeof splitterBarProps>;
