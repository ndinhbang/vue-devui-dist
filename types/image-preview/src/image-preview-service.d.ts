import { ImagePreviewProps } from './image-preview-types';
declare class ImagePreviewService {
    static $body: HTMLElement | null;
    static $div: HTMLDivElement | null;
    static $overflow: string | null;
    static open(props: ImagePreviewProps): void;
    static close(): void;
}
export default ImagePreviewService;
