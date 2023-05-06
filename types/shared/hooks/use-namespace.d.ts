export declare type UseNamespace = {
    b: () => string;
    e: (el: string) => string;
    m: (mo: string) => string;
    em: (el: string, mo: string) => string;
};
/**
 * useNamespace
 * @param block current block name
 * @param needDot Do you need a dot prefix (defalut: false)
 * @returns UseNamespace
 */
export declare function useNamespace(block: string, needDot?: boolean): UseNamespace;
