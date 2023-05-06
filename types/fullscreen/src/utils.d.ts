import { FullscreenProps } from './fullscreen-types';
interface CompatibleHTMLElement extends HTMLElement {
    mozRequestFullScreen?: () => void;
    webkitRequestFullScreen?: () => void;
    msRequestFullscreen?: () => void;
}
interface CompatibleDocument extends Document {
    exitFullscreen: () => Promise<void>;
    mozCancelFullScreen?: () => Promise<void>;
    webkitCancelFullScreen?: () => Promise<void>;
    msExitFullscreen?: () => Promise<void>;
}
export declare const launchNormalFullscreen: (targetElement: HTMLElement, props: FullscreenProps) => void;
export declare const exitNormalFullscreen: (targetElement: HTMLElement) => void;
export declare const launchImmersiveFullScreen: (docElement: CompatibleHTMLElement) => Promise<boolean | undefined>;
export declare const exitImmersiveFullScreen: (doc: CompatibleDocument) => Promise<boolean | undefined>;
export declare const addFullScreenStyle: () => void;
export declare const removeFullScreenStyle: () => void;
export {};
