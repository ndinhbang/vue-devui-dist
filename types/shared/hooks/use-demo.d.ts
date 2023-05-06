interface ExampleItem {
    id: `${string}-${string}`;
    title: string;
    text?: string;
    code: string;
    content: JSX.Element;
}
export declare function useDemo(exampleList: ExampleItem[]): JSX.Element;
export {};
