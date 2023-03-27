import type { PropType } from "vue";
declare const _sfc_main: import("vue").DefineComponent<{
    label: {
        type: StringConstructor;
        required: true;
    };
    placeholder: {
        default: string;
        type: StringConstructor;
    };
    modelValue: {
        default: null;
        type: PropType<Date | Date[] | null>;
    };
    range: {
        type: BooleanConstructor;
    };
    maxDate: {
        default: string;
        type: (StringConstructor | DateConstructor)[];
    };
    minDate: {
        default: string;
        type: (StringConstructor | DateConstructor)[];
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:model-value"[], "update:model-value", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    label: {
        type: StringConstructor;
        required: true;
    };
    placeholder: {
        default: string;
        type: StringConstructor;
    };
    modelValue: {
        default: null;
        type: PropType<Date | Date[] | null>;
    };
    range: {
        type: BooleanConstructor;
    };
    maxDate: {
        default: string;
        type: (StringConstructor | DateConstructor)[];
    };
    minDate: {
        default: string;
        type: (StringConstructor | DateConstructor)[];
    };
}>> & {
    "onUpdate:model-value"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: Date | Date[] | null;
    range: boolean;
    placeholder: string;
    maxDate: string | Date;
    minDate: string | Date;
}>;
export default _sfc_main;
