import type CSS from "csstype";
import type { PropType } from "vue";
declare const _sfc_main: import("vue").DefineComponent<{
    color: {
        default: string;
        type: PropType<string>;
    };
    src: {
        default: string;
        type: StringConstructor;
    };
    name: {
        default: string;
        type: StringConstructor;
    };
    size: {
        default: string;
        type: PropType<CSS.WidthProperty<string | number>>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        default: string;
        type: PropType<string>;
    };
    src: {
        default: string;
        type: StringConstructor;
    };
    name: {
        default: string;
        type: StringConstructor;
    };
    size: {
        default: string;
        type: PropType<CSS.WidthProperty<string | number>>;
    };
}>>, {
    color: string;
    name: string;
    size: CSS.WidthProperty<string | number>;
    src: string;
}>;
export default _sfc_main;
