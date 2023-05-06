import { IAxisConfigs, IViewConfigs } from '../../../type';
import './index.scss';
declare const _default: import("vue").DefineComponent<{
    readonly diagramId: {
        readonly type: StringConstructor;
    };
    readonly axisConfigs: {
        readonly type: import("vue").PropType<IAxisConfigs>;
    };
    readonly view: {
        readonly type: import("vue").PropType<IViewConfigs>;
    };
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly diagramId: {
        readonly type: StringConstructor;
    };
    readonly axisConfigs: {
        readonly type: import("vue").PropType<IAxisConfigs>;
    };
    readonly view: {
        readonly type: import("vue").PropType<IViewConfigs>;
    };
}>>, {}>;
export default _default;
