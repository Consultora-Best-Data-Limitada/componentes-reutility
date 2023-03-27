import type { PropType } from "vue";
declare const _sfc_main: import("vue").DefineComponent<{
    modelValue: {
        default: string;
        type: (StringConstructor | NumberConstructor)[];
    };
    label: {
        type: StringConstructor;
        required: true;
    };
    placeholder: {
        type: StringConstructor;
        required: true;
    };
    errorMessage: {
        default: string;
        type: StringConstructor;
    };
    readonly: {
        type: BooleanConstructor;
    };
    dark: {
        type: BooleanConstructor;
    };
    disabled: {
        type: BooleanConstructor;
    };
    outlined: {
        type: BooleanConstructor;
    };
    clearable: {
        type: BooleanConstructor;
    };
    gridTemplateColumns: {
        default: string;
        type: PropType<string>;
    };
    type: {
        default: string;
        type: PropType<"text" | "email" | "phone" | "time" | "password">;
    };
    appendIcon: {
        default: string;
        type: StringConstructor;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:model-value" | "keydown" | "keyup" | "input" | "focus" | "blur")[], "update:model-value" | "keydown" | "keyup" | "input" | "focus" | "blur", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        default: string;
        type: (StringConstructor | NumberConstructor)[];
    };
    label: {
        type: StringConstructor;
        required: true;
    };
    placeholder: {
        type: StringConstructor;
        required: true;
    };
    errorMessage: {
        default: string;
        type: StringConstructor;
    };
    readonly: {
        type: BooleanConstructor;
    };
    dark: {
        type: BooleanConstructor;
    };
    disabled: {
        type: BooleanConstructor;
    };
    outlined: {
        type: BooleanConstructor;
    };
    clearable: {
        type: BooleanConstructor;
    };
    gridTemplateColumns: {
        default: string;
        type: PropType<string>;
    };
    type: {
        default: string;
        type: PropType<"text" | "email" | "phone" | "time" | "password">;
    };
    appendIcon: {
        default: string;
        type: StringConstructor;
    };
}>> & {
    "onUpdate:model-value"?: ((...args: any[]) => any) | undefined;
    onKeydown?: ((...args: any[]) => any) | undefined;
    onKeyup?: ((...args: any[]) => any) | undefined;
    onInput?: ((...args: any[]) => any) | undefined;
    onFocus?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
}, {
    readonly: boolean;
    disabled: boolean;
    modelValue: string | number;
    type: "text" | "email" | "phone" | "time" | "password";
    outlined: boolean;
    appendIcon: string;
    gridTemplateColumns: string;
    errorMessage: string;
    dark: boolean;
    clearable: boolean;
}>;
export default _sfc_main;
