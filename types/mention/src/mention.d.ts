import { IMentionSuggestionItem } from './mention-types';
import './mention.scss';
declare const _default: import("vue").DefineComponent<{
    position: {
        type: import("vue").PropType<"top" | "bottom">;
        default: string;
    };
    suggestions: {
        type: import("vue").PropType<IMentionSuggestionItem[]>;
        required: boolean;
    };
    notFoundContent: {
        type: StringConstructor;
        default: string;
    };
    loading: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    dmValueParse: {
        type: import("vue").PropType<IMentionSuggestionItem>;
        default: {
            value: string;
            id: string;
        };
    };
    trigger: {
        type: import("vue").PropType<string[]>;
        default: string[];
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "change")[], "select" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    position: {
        type: import("vue").PropType<"top" | "bottom">;
        default: string;
    };
    suggestions: {
        type: import("vue").PropType<IMentionSuggestionItem[]>;
        required: boolean;
    };
    notFoundContent: {
        type: StringConstructor;
        default: string;
    };
    loading: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    dmValueParse: {
        type: import("vue").PropType<IMentionSuggestionItem>;
        default: {
            value: string;
            id: string;
        };
    };
    trigger: {
        type: import("vue").PropType<string[]>;
        default: string[];
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    onSelect?: ((...args: any[]) => any) | undefined;
}, {
    position: "top" | "bottom";
    loading: boolean;
    trigger: string[];
    notFoundContent: string;
    dmValueParse: IMentionSuggestionItem;
}>;
export default _default;
