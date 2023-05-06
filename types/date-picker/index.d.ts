import { App } from 'vue';
import DatePicker from './src/date-picker';
import StickSlider from './src/stick-slider';
export { DatePicker, StickSlider };
declare const _default: {
    title: string;
    category: string;
    status: string;
    deprecated: {
        value: boolean;
        reason: string;
    };
    install(app: App): void;
};
export default _default;
