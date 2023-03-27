import type { PropType } from "vue";
declare const _sfc_main: import("vue").DefineComponent<{
    placeholder: {
        type: StringConstructor;
        required: true;
    };
    modelValue: {
        default: string;
        type: (StringConstructor | NumberConstructor)[];
    };
    clearable: {
        type: BooleanConstructor;
    };
    errorMessage: {
        default: string;
        type: StringConstructor;
    };
    disabled: {
        type: BooleanConstructor;
    };
    outlined: {
        type: BooleanConstructor;
    };
    readonly: {
        type: BooleanConstructor;
    };
    type: {
        default: string;
        type: PropType<"text" | "email" | "phone" | "time" | "password">;
    };
    dark: {
        type: BooleanConstructor;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:model-value" | "keydown" | "keyup" | "input" | "focus" | "blur")[], "update:model-value" | "keydown" | "keyup" | "input" | "focus" | "blur", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    placeholder: {
        type: StringConstructor;
        required: true;
    };
    modelValue: {
        default: string;
        type: (StringConstructor | NumberConstructor)[];
    };
    clearable: {
        type: BooleanConstructor;
    };
    errorMessage: {
        default: string;
        type: StringConstructor;
    };
    disabled: {
        type: BooleanConstructor;
    };
    outlined: {
        type: BooleanConstructor;
    };
    readonly: {
        type: BooleanConstructor;
    };
    type: {
        default: string;
        type: PropType<"text" | "email" | "phone" | "time" | "password">;
    };
    dark: {
        type: BooleanConstructor;
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
    errorMessage: string;
    dark: boolean;
    clearable: boolean;
}>;
export default _sfc_main;
