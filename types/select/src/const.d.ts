import { InjectionKey } from 'vue';
import { SelectContext, OptionGroupContext } from './select-types';
export declare const SELECT_TOKEN: InjectionKey<SelectContext>;
export declare const OPTION_GROUP_TOKEN: InjectionKey<OptionGroupContext>;
export declare const escapeStringRegexp: (string?: string) => string;
