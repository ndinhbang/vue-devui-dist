import { App } from 'vue';
declare const Locale: {
    messages(): Record<string, unknown>;
    lang(): string;
    use(newLang: string, newMessages?: Record<string, unknown> | undefined): void;
    add(newMessages?: {}): void;
};
export { Locale };
declare const _default: {
    install(app: App): void;
};
export default _default;
