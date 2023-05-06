/**
 * 多选模式下的内容框中的选中tag
 * tag组件还未开发完成，所以暂时使用自定义组件
 */
import { CascaderItem } from '../../src/cascader-types';
import './index.scss';
interface PropsType {
    tag: CascaderItem;
    tagList: CascaderItem[];
}
declare const _default: (props: PropsType) => JSX.Element;
export default _default;
