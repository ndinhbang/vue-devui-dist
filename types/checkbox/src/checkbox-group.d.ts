import './checkbox-group.scss';
declare const _default: import("vue").DefineComponent<{
    readonly modelValue: {
        readonly type: import("vue").PropType<(string | number)[]>;
        readonly required: true;
    };
    readonly direction: {
        readonly type: import("vue").PropType<"column" | "row">;
        readonly default: "column";
    };
    readonly itemWidth: {
        readonly type: NumberConstructor;
        readonly default: undefined;
    };
    readonly options: {
        readonly type: import("vue").PropType<({
            value: string;
        } & Partial<import("./checkbox-types").CheckboxProps>)[]>;
        readonly default: () => never[];
    };
    readonly onChange: {
        readonly type: import("vue").PropType<(v: string[]) => void>;
        readonly default: undefined;
    };
    readonly 'onUpdate:modelValue': {
        readonly type: import("vue").PropType<(v: string[]) => void>;
        readonly default: undefined;
    };
    readonly border: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly max: {
        readonly type: NumberConstructor;
        readonly default: undefined;
    };
    readonly textColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly name: {
        readonly type: StringConstructor;
        readonly default: undefined;
    };
    readonly halfChecked: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly isShowTitle: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly title: {
        readonly type: StringConstructor;
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: undefined;
    };
    readonly showAnimation: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly beforeChange: {
        readonly type: import("vue").PropType<(isChecked: boolean, v: string | undefined) => boolean | Promise<boolean>>;
        readonly default: undefined;
    };
    readonly size: {
        readonly type: import("vue").PropType<"sm" | "md" | "lg">;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "change" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: {
        readonly type: import("vue").PropType<(string | number)[]>;
        readonly required: true;
    };
    readonly direction: {
        readonly type: import("vue").PropType<"column" | "row">;
        readonly default: "column";
    };
    readonly itemWidth: {
        readonly type: NumberConstructor;
        readonly default: undefined;
    };
    readonly options: {
        readonly type: import("vue").PropType<({
            value: string;
        } & Partial<import("./checkbox-types").CheckboxProps>)[]>;
        readonly default: () => never[];
    };
    readonly onChange: {
        readonly type: import("vue").PropType<(v: string[]) => void>;
        readonly default: undefined;
    };
    readonly 'onUpdate:modelValue': {
        readonly type: import("vue").PropType<(v: string[]) => void>;
        readonly default: undefined;
    };
    readonly border: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly max: {
        readonly type: NumberConstructor;
        readonly default: undefined;
    };
    readonly textColor: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly name: {
        readonly type: StringConstructor;
        readonly default: undefined;
    };
    readonly halfChecked: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly isShowTitle: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly title: {
        readonly type: StringConstructor;
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: undefined;
    };
    readonly showAnimation: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly beforeChange: {
        readonly type: import("vue").PropType<(isChecked: boolean, v: string | undefined) => boolean | Promise<boolean>>;
        readonly default: undefined;
    };
    readonly size: {
        readonly type: import("vue").PropType<"sm" | "md" | "lg">;
    };
}>>, {
    readonly max: number;
    readonly name: string;
    readonly border: boolean;
    readonly color: string;
    readonly direction: "column" | "row";
    readonly disabled: boolean;
    readonly options: ({
        value: string;
    } & Partial<import("./checkbox-types").CheckboxProps>)[];
    readonly onChange: (v: string[]) => void;
    readonly showAnimation: boolean;
    readonly 'onUpdate:modelValue': (v: string[]) => void;
    readonly textColor: string;
    readonly halfChecked: boolean;
    readonly isShowTitle: boolean;
    readonly beforeChange: (isChecked: boolean, v: string | undefined) => boolean | Promise<boolean>;
    readonly itemWidth: number;
}>;
export default _default;
