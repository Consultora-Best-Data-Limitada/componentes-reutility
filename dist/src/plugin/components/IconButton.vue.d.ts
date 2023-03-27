import type { PropType } from "vue";
declare const _sfc_main: import("vue").DefineComponent<{
    color: {
        default: string;
        type: PropType<string>;
    };
    icon: {
        type: StringConstructor;
        required: true;
    };
    size: {
        default: string;
        type: PropType<string>;
    };
    disabled: {
        type: BooleanConstructor;
    };
    backgroundColor: {
        default: string;
        type: PropType<string>;
    };
    containerSize: {
        default: string;
        type: PropType<string>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        default: string;
        type: PropType<string>;
    };
    icon: {
        type: StringConstructor;
        required: true;
    };
    size: {
        default: string;
        type: PropType<string>;
    };
    disabled: {
        type: BooleanConstructor;
    };
    backgroundColor: {
        default: string;
        type: PropType<string>;
    };
    containerSize: {
        default: string;
        type: PropType<string>;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    color: string;
    size: string;
    backgroundColor: string;
    containerSize: string;
}>;
export default _sfc_main;
