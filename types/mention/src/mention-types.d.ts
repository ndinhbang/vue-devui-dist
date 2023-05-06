import { ExtractPropTypes, PropType } from 'vue';
export interface IMentionSuggestionItem {
    value: string;
    id: string | number;
}
export declare const mentionProps: {
    position: {
        type: PropType<"top" | "bottom">;
        default: string;
    };
    suggestions: {
        type: PropType<IMentionSuggestionItem[]>;
        required: boolean;
    };
    notFoundContent: {
        type: StringConstructor;
        default: string;
    };
    loading: {
        type: PropType<boolean>;
        default: boolean;
    };
    dmValueParse: {
        type: PropType<IMentionSuggestionItem>;
        default: {
            value: string;
            id: string;
        };
    };
    trigger: {
        type: PropType<string[]>;
        default: string[];
    };
};
export declare type MentionProps = ExtractPropTypes<typeof mentionProps>;
