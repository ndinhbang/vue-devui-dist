declare const _default: {
    /**
       *
       * @param el
       * @description
       *     此命令用于将元素变为可放置的元素并且支持排序
       *     功能分析
       *        1、非自身区域内拖动，生成shadow
       *        2、自身区域内拖动，不生成shadow
       *    实现分析（根据ng-devui）
       *        shadow的生成规则
       *        shadow的生成位置
       *    待思考问题
       *        1、整个拖拽过程中，是否有必要添加节流防抖？
       */
    mounted(el: HTMLElement, binding: unknown): void;
};
export default _default;
