export declare const RESULT_SCREEN: string[];
export declare const screenMedias: {
    readonly xs: "screen and (max-width: 575px)";
    readonly sm: "screen and (min-width: 576px)";
    readonly md: "screen and (min-width: 768px)";
    readonly lg: "screen and (min-width: 992px)";
    readonly xl: "screen and (min-width: 1200px)";
    readonly xxl: "screen and (min-width: 1600px)";
};
export interface Screen {
    xs?: boolean;
    sm?: boolean;
    md?: boolean;
    lg?: boolean;
    xl?: boolean;
    xxl?: boolean;
}
export declare type ScreenMediasKey = keyof typeof screenMedias;
declare type SubscribeCb = (screen: Screen) => void;
export declare function responesScreen(func: SubscribeCb): number;
export declare function removeSubscribeCb(id: number): void;
export {};
