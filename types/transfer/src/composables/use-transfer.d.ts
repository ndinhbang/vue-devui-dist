import type { SetupContext } from 'vue';
import { TTransferProps, TKey } from '../transfer-types';
export declare const transferState: (props: TTransferProps, ctx: SetupContext) => {
    sourceTitle: import("vue").ComputedRef<string>;
    targetTitle: import("vue").ComputedRef<string>;
    sourceData: import("vue").Ref<{
        value: string | number;
        name: string;
        disabled: boolean;
    }[]>;
    targetData: import("vue").Ref<{
        value: string | number;
        name: string;
        disabled: boolean;
    }[]>;
    sourceDisabled: import("vue").ComputedRef<boolean>;
    targetDisabled: import("vue").ComputedRef<boolean>;
    sourceChecked: import("vue").Ref<TKey[]>;
    targetChecked: import("vue").Ref<TKey[]>;
    sourceDirection: import("vue").Ref<string>;
    targetDirection: import("vue").Ref<string>;
    updateSourceAllCheckedHandle: (value: TKey[]) => void;
    updateTargetAllCheckedHandle: (value: TKey[]) => void;
    updateSourceCheckedHandle: (value: TKey[]) => void;
    updateTargetCheckedHandle: (value: TKey[]) => void;
    toMoveTargetHandle: () => void;
    toMoveSourceHandle: () => void;
    updateSourceDataHandle: (startValue: TKey, endValue: TKey) => void;
    updateTargetDataHandle: (startValue: TKey, endValue: TKey) => void;
};
