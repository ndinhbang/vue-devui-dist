export declare const isNumber: (value: unknown) => value is number;
export declare const isBoolean: (value: unknown) => value is boolean;
export declare const isString: (value: unknown) => value is string;
export declare const isObject: (value: unknown) => value is Record<string, unknown>;
export declare const isFunction: (value: unknown) => value is () => unknown;
export declare const isUndefined: (value: unknown) => value is undefined;
export declare const isNull: (value: unknown) => value is null;
export declare const isHTMLElement: (value: unknown) => value is HTMLElement;
