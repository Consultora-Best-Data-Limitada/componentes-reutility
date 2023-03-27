import type CSS from "csstype";
import type { PropType } from "vue";
declare const _sfc_main: import("vue").DefineComponent<{
    label: {
        type: StringConstructor;
        required: true;
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
        default: boolean;
    };
    modelValue: {
        default: null;
        type: PropType<string | number | unknown[] | Record<string, any> | null>;
    };
    searchable: {
        type: BooleanConstructor;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:model-value"[], "update:model-value", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    label: {
        type: StringConstructor;
        required: true;
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
        default: boolean;
    };
    modelValue: {
        default: null;
        type: PropType<string | number | unknown[] | Record<string, any> | null>;
    };
    searchable: {
        type: BooleanConstructor;
    };
}>> & {
    "onUpdate:model-value"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: string | number | unknown[] | Record<string, any> | null;
    itemValue: string;
    itemTitle: string;
    returnObject: boolean;
    textMultiple: string;
    textTransform: CSS.TextTransformProperty;
    multiple: boolean;
    searchable: boolean;
}>;
export default _sfc_main;
