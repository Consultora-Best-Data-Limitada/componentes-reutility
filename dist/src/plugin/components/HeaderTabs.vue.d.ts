import type { PropType } from "vue";
declare const _sfc_main: import("vue").DefineComponent<{
    items: {
        required: true;
        type: PropType<string[]>;
    };
    modelValue: {
        type: NumberConstructor;
        required: true;
    };
    columnGap: {
        default: string;
        type: PropType<string>;
    };
    color: {
        default: string;
        type: PropType<string>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:model-value"[], "update:model-value", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    items: {
        required: true;
        type: PropType<string[]>;
    };
    modelValue: {
        type: NumberConstructor;
        required: true;
    };
    columnGap: {
        default: string;
        type: PropType<string>;
    };
    color: {
        default: string;
        type: PropType<string>;
    };
}>> & {
    "onUpdate:model-value"?: ((...args: any[]) => any) | undefined;
}, {
    color: string;
    columnGap: string;
}>;
export default _sfc_main;
