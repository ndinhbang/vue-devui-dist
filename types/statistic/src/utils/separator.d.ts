export declare type valueType = string | number;
export declare const separator: (SeparatorString: string, groupSeparator: string) => string;
export declare const isHasDot: (value: number) => boolean;
export declare const analysisValueType: (value: valueType, propsValue: valueType, groupSeparator: string, splitPrecisionNumber: number) => string;
