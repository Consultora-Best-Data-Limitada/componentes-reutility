import type CSS from "csstype";
import type { PropType } from "vue";
declare const _sfc_main: import("vue").DefineComponent<{
    label: {
        type: StringConstructor;
        required: true;
    };
    gridTemplateColumns: {
        default: string;
        type: PropType<string>;
    };
    padding: {
        default: string;
        type: PropType<string>;
    };
    textTransform: {
        default: string;
        type: PropType<CSS.TextTransformProperty>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    label: {
        type: StringConstructor;
        required: true;
    };
    gridTemplateColumns: {
        default: string;
        type: PropType<string>;
    };
    padding: {
        default: string;
        type: PropType<string>;
    };
    textTransform: {
        default: string;
        type: PropType<CSS.TextTransformProperty>;
    };
}>>, {
    gridTemplateColumns: string;
    textTransform: CSS.TextTransformProperty;
    padding: string;
}>;
export default _sfc_main;
