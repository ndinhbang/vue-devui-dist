declare type cbFn = () => void;
declare function useEventListener(target: HTMLElement, event: string, cb: cbFn): void;
export default useEventListener;
