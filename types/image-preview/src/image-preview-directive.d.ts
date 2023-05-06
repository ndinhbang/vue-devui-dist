import { BindingTypes, UpdateBindingTypes } from './image-preview-types';
interface PreviewHTMLElement extends HTMLElement {
    zIndex?: number;
    backDropZIndex?: number;
}
declare const _default: {
    mounted(el: PreviewHTMLElement, binding: BindingTypes | undefined): void;
    unmounted(): void;
    updated(el: PreviewHTMLElement, binding: UpdateBindingTypes | undefined): void;
};
export default _default;
