import { SourceConfig } from './breadcrumb-types';
import './breadcrumb.scss';
declare const _default: import("vue").DefineComponent<{
    readonly source: {
        readonly type: import("vue").PropType<SourceConfig[]>;
        readonly default: readonly [];
    };
    readonly separatorIcon: {
        readonly type: StringConstructor;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly source: {
        readonly type: import("vue").PropType<SourceConfig[]>;
        readonly default: readonly [];
    };
    readonly separatorIcon: {
        readonly type: StringConstructor;
    };
}>>, {
    readonly source: SourceConfig[];
}>;
export default _default;
