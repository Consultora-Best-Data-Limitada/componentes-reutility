import type CSS from "csstype";
import type { PropType } from "vue";
declare const _sfc_main: import("vue").DefineComponent<{
    modelValue: {
        type: BooleanConstructor;
        required: true;
    };
    label: {
        default: string;
        type: StringConstructor;
    };
    tooltip: {
        default: string;
        type: StringConstructor;
    };
    disabled: {
        type: BooleanConstructor;
    };
    activeColor: {
        default: string;
        type: PropType<string>;
    };
    width: {
        default: string;
        type: PropType<string>;
    };
    color: {
        default: string;
        type: PropType<string>;
    };
    readonly: {
        type: BooleanConstructor;
    };
    labelWeight: {
        default: number;
        type: PropType<CSS.FontWeightProperty>;
    };
    gridTemplateColumns: {
        default: string;
        type: PropType<string>;
    };
    justifyContent: {
        default: string;
        type: PropType<string>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:model-value"[], "update:model-value", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: BooleanConstructor;
        required: true;
    };
    label: {
        default: string;
        type: StringConstructor;
    };
    tooltip: {
        default: string;
        type: StringConstructor;
    };
    disabled: {
        type: BooleanConstructor;
    };
    activeColor: {
        default: string;
        type: PropType<string>;
    };
    width: {
        default: string;
        type: PropType<string>;
    };
    color: {
        default: string;
        type: PropType<string>;
    };
    readonly: {
        type: BooleanConstructor;
    };
    labelWeight: {
        default: number;
        type: PropType<CSS.FontWeightProperty>;
    };
    gridTemplateColumns: {
        default: string;
        type: PropType<string>;
    };
    justifyContent: {
        default: string;
        type: PropType<string>;
    };
}>> & {
    "onUpdate:model-value"?: ((...args: any[]) => any) | undefined;
}, {
    readonly: boolean;
    disabled: boolean;
    width: string;
    color: string;
    activeColor: string;
    justifyContent: string;
    gridTemplateColumns: string;
    label: string;
    tooltip: string;
    labelWeight: CSS.FontWeightProperty;
}>;
export default _sfc_main;
