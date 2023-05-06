import type { ExtractPropTypes, PropType } from 'vue';
import { IViewConfigs, IAxisConfigs } from '../../../type';
export declare const quadrantDiagramAxisProps: {
    readonly diagramId: {
        readonly type: StringConstructor;
    };
    readonly axisConfigs: {
        readonly type: PropType<IAxisConfigs>;
    };
    readonly view: {
        readonly type: PropType<IViewConfigs>;
    };
};
export declare type QuadrantDiagramAxisProps = ExtractPropTypes<typeof quadrantDiagramAxisProps>;
