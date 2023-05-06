interface BindingType {
    value: {
        droppable?: boolean;
        isSingle?: boolean;
        onFileDrop?: (files: File[]) => void;
        onFileOver?: (event: unknown) => void;
    };
}
declare const fileDropDirective: {
    mounted: (el: HTMLElement, binding: BindingType) => void;
};
export default fileDropDirective;
