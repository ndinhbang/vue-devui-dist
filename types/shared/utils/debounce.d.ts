/**
 *
 * @param func The function to debounce.
 * @param wait The number of milliseconds to delay.
 * @param immediate Whether to execute immediately
 * @returns Returns the new debounced function.
 */
export declare function debounce<A extends Array<any>, R = void>(func: (...args: A) => R, wait: number, immediate: boolean): (...args: A) => R;
