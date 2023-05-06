import type { PropType } from 'vue';
import { PopType } from './popover-types';
import './popover-icon.scss';
declare const _default: import("vue").DefineComponent<{
    type: {
        type: PropType<PopType>;
        default: string;
    };
}, () => false | JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: PropType<PopType>;
        default: string;
    };
}>>, {
    type: PopType;
}>;
export default _default;
