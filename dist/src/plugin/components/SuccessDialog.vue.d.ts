import type { PropType } from "vue";
declare const _sfc_main: import("vue").DefineComponent<{
    icon: {
        type: StringConstructor;
        required: true;
    };
    text: {
        type: StringConstructor;
        required: true;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    modelValue: {
        type: BooleanConstructor;
        required: true;
    };
    subtitle: {
        default: string;
        type: StringConstructor;
    };
    width: {
        default: string;
        type: PropType<string>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:model-value" | "close")[], "update:model-value" | "close", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    icon: {
        type: StringConstructor;
        required: true;
    };
    text: {
        type: StringConstructor;
        required: true;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    modelValue: {
        type: BooleanConstructor;
        required: true;
    };
    subtitle: {
        default: string;
        type: StringConstructor;
    };
    width: {
        default: string;
        type: PropType<string>;
    };
}>> & {
    "onUpdate:model-value"?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
}, {
    subtitle: string;
    width: string;
    duration: number;
}>;
export default _sfc_main;
