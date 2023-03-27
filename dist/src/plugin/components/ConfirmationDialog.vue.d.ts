import type { PropType } from "vue";
declare const _sfc_main: import("vue").DefineComponent<{
    title: {
        type: StringConstructor;
        required: true;
    };
    subtitle: {
        default: string;
        type: StringConstructor;
    };
    modelValue: {
        type: BooleanConstructor;
        required: true;
    };
    width: {
        default: string;
        type: PropType<string>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:model-value" | "click:no" | "click:yes")[], "update:model-value" | "click:no" | "click:yes", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    title: {
        type: StringConstructor;
        required: true;
    };
    subtitle: {
        default: string;
        type: StringConstructor;
    };
    modelValue: {
        type: BooleanConstructor;
        required: true;
    };
    width: {
        default: string;
        type: PropType<string>;
    };
}>> & {
    "onUpdate:model-value"?: ((...args: any[]) => any) | undefined;
    "onClick:no"?: ((...args: any[]) => any) | undefined;
    "onClick:yes"?: ((...args: any[]) => any) | undefined;
}, {
    subtitle: string;
    width: string;
}>;
export default _sfc_main;
