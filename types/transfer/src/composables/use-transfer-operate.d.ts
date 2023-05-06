import { ExtractPropTypes, PropType } from 'vue';
import type { SetupContext } from 'vue';
export declare const transferOperateProps: {
    readonly sourceDisabled: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly targetDisabled: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly onToTarget: {
        readonly type: PropType<() => void>;
    };
    readonly onToSource: {
        readonly type: PropType<() => void>;
    };
};
export declare type TTransferOperateProps = ExtractPropTypes<typeof transferOperateProps>;
export declare const transferHeaderState: (props: TTransferOperateProps, ctx: SetupContext) => {
    toTargetHandle: () => void;
    toSourceHandle: () => void;
};
