import type CSS from "csstype";
import type { PropType } from "vue";
declare const _sfc_main: import("vue").DefineComponent<{
    name: {
        type: StringConstructor;
        required: true;
    };
    color: {
        default: string;
        type: PropType<string>;
    };
    size: {
        default: string;
        type: PropType<CSS.FontSizeProperty<string | number>>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    name: {
        type: StringConstructor;
        required: true;
    };
    color: {
        default: string;
        type: PropType<string>;
    };
    size: {
        default: string;
        type: PropType<CSS.FontSizeProperty<string | number>>;
    };
}>>, {
    color: string;
    size: CSS.FontSizeProperty<string | number>;
}>;
export default _sfc_main;
