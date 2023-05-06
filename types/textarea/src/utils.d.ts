declare type TextAreaHeight = {
    height: string;
    minHeight?: string;
};
export declare function computeTextareaHeight(targetElement: HTMLTextAreaElement | undefined, minRows?: number, maxRows?: number): TextAreaHeight;
export {};
