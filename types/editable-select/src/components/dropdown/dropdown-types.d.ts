import type { PropType, ExtractPropTypes } from 'vue';
import { Options } from '../../editable-select-types';
export declare const dropdownProps: {
    readonly options: {
        readonly type: PropType<Options>;
        readonly default: () => never[];
    };
    readonly width: {
        readonly type: NumberConstructor;
    };
    readonly maxHeight: {
        readonly type: NumberConstructor;
    };
};
export declare type DropdownProps = ExtractPropTypes<typeof dropdownProps>;
