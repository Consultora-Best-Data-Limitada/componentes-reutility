import type CSS from "csstype";
import type { PropType } from "vue";
declare const _sfc_main: import("vue").DefineComponent<{
    disabled: {
        type: BooleanConstructor;
    };
    selected: {
        type: BooleanConstructor;
    };
    textTransform: {
        default: string;
        type: PropType<CSS.TextTransformProperty>;
    };
    textAlign: {
        default: string;
        type: PropType<CSS.TextAlignProperty>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    disabled: {
        type: BooleanConstructor;
    };
    selected: {
        type: BooleanConstructor;
    };
    textTransform: {
        default: string;
        type: PropType<CSS.TextTransformProperty>;
    };
    textAlign: {
        default: string;
        type: PropType<CSS.TextAlignProperty>;
    };
}>>, {
    disabled: boolean;
    textTransform: CSS.TextTransformProperty;
    selected: boolean;
    textAlign: CSS.TextAlignProperty;
}>;
export default _sfc_main;
