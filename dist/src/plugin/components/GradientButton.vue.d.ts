import type CSS from "csstype";
import type { PropType } from "vue";
declare const _sfc_main: import("vue").DefineComponent<{
    width: {
        default: string;
        type: PropType<CSS.WidthProperty<string | number>>;
    };
    height: {
        default: string;
        type: PropType<CSS.HeightProperty<string | number>>;
    };
    colorFrom: {
        default: string;
        type: PropType<string>;
    };
    colorTo: {
        default: string;
        type: PropType<string>;
    };
    textColor: {
        default: string;
        type: PropType<string>;
    };
    disabled: {
        type: BooleanConstructor;
    };
    icon: {
        default: string;
        type: StringConstructor;
    };
    loading: {
        type: BooleanConstructor;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    width: {
        default: string;
        type: PropType<CSS.WidthProperty<string | number>>;
    };
    height: {
        default: string;
        type: PropType<CSS.HeightProperty<string | number>>;
    };
    colorFrom: {
        default: string;
        type: PropType<string>;
    };
    colorTo: {
        default: string;
        type: PropType<string>;
    };
    textColor: {
        default: string;
        type: PropType<string>;
    };
    disabled: {
        type: BooleanConstructor;
    };
    icon: {
        default: string;
        type: StringConstructor;
    };
    loading: {
        type: BooleanConstructor;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    width: CSS.WidthProperty<string | number>;
    height: CSS.HeightProperty<string | number>;
    loading: boolean;
    colorFrom: string;
    colorTo: string;
    textColor: string;
    icon: string;
}>;
export default _sfc_main;
