export interface fromType {
    value: number;
}
export interface toType {
    value: number;
}
export declare type easingType = 'easeOutCubic' | 'linear' | 'easeOutExpo' | 'easeInOutExpo';
export declare type formAndToAttributesType = 'value' | unknown;
export declare type startFunc = (key: number) => number;
export declare type updateFunc = (key: toType) => void;
export declare type finishFunc = (key: toType) => void;
export interface AnimationOptions {
    from: fromType;
    to: toType;
    duration?: number;
    delay?: number;
    easing?: easingType;
    onStart?: startFunc;
    onUpdate?: updateFunc;
    onFinish?: finishFunc;
}
export declare class Tween {
    from: fromType;
    to: toType;
    duration?: number;
    delay?: number;
    easing?: easingType;
    onStart?: startFunc;
    onUpdate?: updateFunc;
    onFinish?: finishFunc;
    startTime?: number;
    started?: boolean;
    finished?: boolean;
    timer?: null | number;
    time?: number;
    elapsed?: number;
    keys?: toType;
    constructor(options: AnimationOptions);
    update(): void;
    start(): void;
    stop(): void;
}
