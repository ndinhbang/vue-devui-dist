import type { App } from 'vue';
import DatePickerPro from './src/date-picker-pro';
import DRangeDatePickerPro from './src/components/range-date-picker-pro';
export * from './src/date-picker-pro-types';
export { DatePickerPro, DRangeDatePickerPro };
declare const _default: {
    title: string;
    category: string;
    status: string;
    install(app: App): void;
};
export default _default;
