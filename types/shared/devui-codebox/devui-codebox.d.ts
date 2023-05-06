import { DevuiSourceData } from './devui-source-data';
import './devui-codebox.scss';
declare const _default: import("vue").DefineComponent<{
    id: StringConstructor;
    sourceData: {
        type: () => DevuiSourceData[];
        default: never[];
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    id: StringConstructor;
    sourceData: {
        type: () => DevuiSourceData[];
        default: never[];
    };
}>>, {
    sourceData: DevuiSourceData[];
}>;
export default _default;
