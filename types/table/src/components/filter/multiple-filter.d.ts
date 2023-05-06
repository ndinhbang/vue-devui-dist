import type { PropType } from 'vue';
import { FilterConfig } from '../column/column-types';
declare const _default: import("vue").DefineComponent<{
    filterList: {
        type: PropType<FilterConfig[]>;
        default: () => never[];
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "confirm", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    filterList: {
        type: PropType<FilterConfig[]>;
        default: () => never[];
    };
}>>, {
    filterList: FilterConfig[];
}>;
export default _default;
