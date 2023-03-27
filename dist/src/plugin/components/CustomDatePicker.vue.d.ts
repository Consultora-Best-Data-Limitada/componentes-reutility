import type { PropType } from "vue";
declare const _sfc_main: import("vue").DefineComponent<{
    modelValue: {
        default: null;
        type: PropType<Date | Date[] | null>;
    };
    range: {
        type: BooleanConstructor;
    };
    readonly: {
        type: BooleanConstructor;
    };
    disabled: {
        type: BooleanConstructor;
    };
    placeholder: {
        default: string;
        type: StringConstructor;
    };
    maxDate: {
        default: string;
        type: (StringConstructor | DateConstructor)[];
    };
    minDate: {
        default: string;
        type: (StringConstructor | DateConstructor)[];
    };
    errorMessage: {
        default: string;
        type: StringConstructor;
    };
    outlined: {
        type: BooleanConstructor;
    };
    dark: {
        type: BooleanConstructor;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:model-value"[], "update:model-value", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        default: null;
        type: PropType<Date | Date[] | null>;
    };
    range: {
        type: BooleanConstructor;
    };
    readonly: {
        type: BooleanConstructor;
    };
    disabled: {
        type: BooleanConstructor;
    };
    placeholder: {
        default: string;
        type: StringConstructor;
    };
    maxDate: {
        default: string;
        type: (StringConstructor | DateConstructor)[];
    };
    minDate: {
        default: string;
        type: (StringConstructor | DateConstructor)[];
    };
    errorMessage: {
        default: string;
        type: StringConstructor;
    };
    outlined: {
        type: BooleanConstructor;
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
    range: boolean;
    placeholder: string;
    maxDate: string | Date;
    minDate: string | Date;
    errorMessage: string;
    dark: boolean;
}>;
export default _sfc_main;
