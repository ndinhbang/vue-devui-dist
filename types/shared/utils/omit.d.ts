declare function omit<T extends Record<string, unknown>, K extends keyof T>(obj: T, fields: K[]): Omit<T, K>;
export { omit };
export default omit;
