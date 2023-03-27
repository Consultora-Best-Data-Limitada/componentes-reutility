import type { PropType } from "vue";
declare const _sfc_main: import("vue").DefineComponent<{
    label: {
        type: StringConstructor;
        required: true;
    };
    errorMessage: {
        default: string;
        type: StringConstructor;
    };
    placeholder: {
        type: StringConstructor;
        required: true;
    };
    clearable: {
        type: BooleanConstructor;
    };
    range: {
        type: BooleanConstructor;
    };
    disabled: {
        type: BooleanConstructor;
    };
    readonly: {
        type: BooleanConstructor;
    };
    modelValue: {
        default: null;
        type: PropType<Date | Date[] | null>;
    };
    outlined: {
        type: BooleanConstructor;
    };
    gridTemplateColumns: {
        default: string;
        type: PropType<string>;
    };
    maxDate: {
        default: string;
        type: (StringConstructor | DateConstructor)[];
    };
    minDate: {
        default: string;
        type: (StringConstructor | DateConstructor)[];
    };
    dark: {
        type: BooleanConstructor;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:model-value"[], "update:model-value", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    label: {
        type: StringConstructor;
        required: true;
    };
    errorMessage: {
        default: string;
        type: StringConstructor;
    };
    placeholder: {
        type: StringConstructor;
        required: true;
    };
    clearable: {
        type: BooleanConstructor;
    };
    range: {
        type: BooleanConstructor;
    };
    disabled: {
        type: BooleanConstructor;
    };
    readonly: {
        type: BooleanConstructor;
    };
    modelValue: {
        default: null;
        type: PropType<Date | Date[] | null>;
    };
    outlined: {
        type: BooleanConstructor;
    };
    gridTemplateColumns: {
        default: string;
        type: PropType<string>;
    };
    maxDate: {
        default: string;
        type: (StringConstructor | DateConstructor)[];
    };
    minDate: {
        default: string;
        type: (StringConstructor | DateConstructor)[];
    };
    dark: {
        type: BooleanConstructor;
    };
}>> & {
    "onUpdate:model-value"?: ((...args: any[]) => any) | undefined;
}, {
    readonly: boolean;
    disabled: boolean;
    modelValue: Date | Date[] | null;
    outlined: boolean;
    gridTemplateColumns: string;
    range: boolean;
    maxDate: string | Date;
    minDate: string | Date;
    errorMessage: string;
    dark: boolean;
    clearable: boolean;
}>;
export default _sfc_main;
