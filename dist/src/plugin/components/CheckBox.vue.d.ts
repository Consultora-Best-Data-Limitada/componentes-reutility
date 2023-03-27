import type { PropType } from "vue";
declare const _sfc_main: import("vue").DefineComponent<{
    boxIcon: {
        type: StringConstructor;
        default: string;
    };
    boxColor: {
        default: string;
        type: PropType<string>;
    };
    checkedColor: {
        default: string;
        type: PropType<string>;
    };
    readonly: {
        type: BooleanConstructor;
    };
    disabled: {
        type: BooleanConstructor;
    };
    boxIconSize: {
        default: string;
        type: PropType<string>;
    };
    checkedIcon: {
        type: StringConstructor;
        default: string;
    };
    checkedIconSize: {
        default: string;
        type: PropType<string>;
    };
    modelValue: {
        type: BooleanConstructor;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:model-value"[], "update:model-value", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    boxIcon: {
        type: StringConstructor;
        default: string;
    };
    boxColor: {
        default: string;
        type: PropType<string>;
    };
    checkedColor: {
        default: string;
        type: PropType<string>;
    };
    readonly: {
        type: BooleanConstructor;
    };
    disabled: {
        type: BooleanConstructor;
    };
    boxIconSize: {
        default: string;
        type: PropType<string>;
    };
    checkedIcon: {
        type: StringConstructor;
        default: string;
    };
    checkedIconSize: {
        default: string;
        type: PropType<string>;
    };
    modelValue: {
        type: BooleanConstructor;
        required: true;
    };
}>> & {
    "onUpdate:model-value"?: ((...args: any[]) => any) | undefined;
}, {
    boxIcon: string;
    boxColor: string;
    checkedColor: string;
    readonly: boolean;
    disabled: boolean;
    boxIconSize: string;
    checkedIcon: string;
    checkedIconSize: string;
}>;
export default _sfc_main;
