import type { IStatusType } from './status-types';
import './status.scss';
declare const _default: import("vue").DefineComponent<{
    type: {
        default: string;
        type: () => IStatusType;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        default: string;
        type: () => IStatusType;
    };
}>>, {
    type: IStatusType;
}>;
export default _default;
