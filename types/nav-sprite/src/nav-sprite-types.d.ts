export declare type SpriteMode = 'default' | 'sprite';
export interface SpriteOption {
    top: string;
    left: string;
    zIndex: number;
}
export interface NavMenu {
    originEle: HTMLElement;
    label: string;
    level: number;
    scrollPosition: {
        top: number;
        startLine: number;
    };
}
export declare const navSpriteProps: {
    target: {
        type: ObjectConstructor;
    };
    scrollTarget: {
        type: ObjectConstructor;
    };
    view: {
        type: () => {
            top?: number;
            bottom?: number;
        };
        default: {
            top: number;
            bottom: number;
        };
    };
    hashSupport: {
        type: BooleanConstructor;
        default: boolean;
    };
    mode: {
        type: () => SpriteMode;
        default: string;
    };
    maxLevel: {
        type: NumberConstructor;
        default: number;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    indent: {
        type: NumberConstructor;
        default: number;
    };
    width: {
        type: NumberConstructor;
        default: number;
    };
    height: {
        type: NumberConstructor;
        default: number;
    };
    isOpen: {
        type: BooleanConstructor;
        default: boolean;
    };
    spriteOption: {
        type: () => SpriteOption;
    };
};
