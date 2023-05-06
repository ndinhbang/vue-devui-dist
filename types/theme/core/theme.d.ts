declare class Theme {
    static imports: any;
    static import(name: string): any;
    static register(name: string, target: any): void;
    constructor(theme: string);
    applyTheme(name: string): void;
}
export default Theme;
