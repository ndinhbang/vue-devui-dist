import { ExtractPropTypes, PropType } from 'vue';
import type { SetupContext } from 'vue';
import { IItem, TKey } from '../transfer-types';
export declare const transferHeaderProps: {
    readonly title: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly checked: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly halfchecked: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly total: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly checkedNum: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly unit: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly onChange: {
        readonly type: PropType<(value: boolean) => void>;
    };
    readonly search: {
        readonly type: PropType<(direction: string, data: IItem[], keyword: TKey) => void>;
    };
};
export declare type TTransferHeaderProps = ExtractPropTypes<typeof transferHeaderProps>;
export declare const transferHeaderState: (props: TTransferHeaderProps, ctx: SetupContext) => {
    allCheckedChangeHandle: (value: boolean) => void;
};
