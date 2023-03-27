import type CSS from "csstype";
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
    itemValue: {
        type: StringConstructor;
        default: string;
    };
    itemTitle: {
        type: StringConstructor;
        default: string;
    };
    returnObject: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearable: {
        type: BooleanConstructor;
    };
    textMultiple: {
        default: string;
        type: StringConstructor;
    };
    items: {
        required: true;
        type: PropType<unknown[]>;
    };
    textTransform: {
        default: string;
        type: PropType<CSS.TextTransformProperty>;
    };
    multiple: {
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
        type: PropType<string | number | unknown[] | Record<string, any> | null>;
    };
    outlined: {
        type: BooleanConstructor;
    };
    gridTemplateColumns: {
        default: string;
        type: PropType<string>;
    };
    searchable: {
        type: BooleanConstructor;
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
    itemValue: {
        type: StringConstructor;
        default: string;
    };
    itemTitle: {
        type: StringConstructor;
        default: string;
    };
    returnObject: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearable: {
        type: BooleanConstructor;
    };
    textMultiple: {
        default: string;
        type: StringConstructor;
    };
    items: {
        required: true;
        type: PropType<unknown[]>;
    };
    textTransform: {
        default: string;
        type: PropType<CSS.TextTransformProperty>;
    };
    multiple: {
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
        type: PropType<string | number | unknown[] | Record<string, any> | null>;
    };
    outlined: {
        type: BooleanConstructor;
    };
    gridTemplateColumns: {
        default: string;
        type: PropType<string>;
    };
    searchable: {
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
    modelValue: string | number | unknown[] | Record<string, any> | null;
    outlined: boolean;
    gridTemplateColumns: string;
    errorMessage: string;
    dark: boolean;
    itemValue: string;
    itemTitle: string;
    returnObject: boolean;
    clearable: boolean;
    textMultiple: string;
    textTransform: CSS.TextTransformProperty;
    multiple: boolean;
    searchable: boolean;
}>;
export default _sfc_main;
