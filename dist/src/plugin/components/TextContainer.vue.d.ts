import type CSS from "csstype";
import type { PropType } from "vue";
declare const _sfc_main: import("vue").DefineComponent<{
    fontSize: {
        default: string;
        type: PropType<CSS.FontSizeProperty<string | number>>;
    };
    padding: {
        default: string;
        type: PropType<CSS.PaddingProperty<string | number>>;
    };
    lineHeight: {
        default: string;
        type: PropType<CSS.LineHeightProperty<string | number>>;
    };
    textAlign: {
        default: string;
        type: PropType<CSS.TextAlignProperty>;
    };
    textTransform: {
        default: string;
        type: PropType<CSS.TextTransformProperty>;
    };
    color: {
        default: string;
        type: PropType<string>;
    };
    hoverColor: {
        default: string;
        type: PropType<string>;
    };
    activeColor: {
        default: string;
        type: PropType<string>;
    };
    hoverBackground: {
        default: string;
        type: PropType<string>;
    };
    activeBackground: {
        default: string;
        type: PropType<string>;
    };
    whiteSpace: {
        default: string;
        type: PropType<CSS.WhiteSpaceProperty>;
    };
    fontWeight: {
        default: string;
        type: (StringConstructor | NumberConstructor)[];
    };
    letterSpacing: {
        default: string;
        type: PropType<CSS.LetterSpacingProperty<string | number>>;
    };
    fontFamily: {
        default: string;
        type: PropType<string>;
    };
    predefinedStyle: {
        default: string;
        type: PropType<PredefinedStyle>;
    };
    clickable: {
        type: BooleanConstructor;
    };
    borderRadius: {
        default: string;
        type: PropType<string>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    fontSize: {
        default: string;
        type: PropType<CSS.FontSizeProperty<string | number>>;
    };
    padding: {
        default: string;
        type: PropType<CSS.PaddingProperty<string | number>>;
    };
    lineHeight: {
        default: string;
        type: PropType<CSS.LineHeightProperty<string | number>>;
    };
    textAlign: {
        default: string;
        type: PropType<CSS.TextAlignProperty>;
    };
    textTransform: {
        default: string;
        type: PropType<CSS.TextTransformProperty>;
    };
    color: {
        default: string;
        type: PropType<string>;
    };
    hoverColor: {
        default: string;
        type: PropType<string>;
    };
    activeColor: {
        default: string;
        type: PropType<string>;
    };
    hoverBackground: {
        default: string;
        type: PropType<string>;
    };
    activeBackground: {
        default: string;
        type: PropType<string>;
    };
    whiteSpace: {
        default: string;
        type: PropType<CSS.WhiteSpaceProperty>;
    };
    fontWeight: {
        default: string;
        type: (StringConstructor | NumberConstructor)[];
    };
    letterSpacing: {
        default: string;
        type: PropType<CSS.LetterSpacingProperty<string | number>>;
    };
    fontFamily: {
        default: string;
        type: PropType<string>;
    };
    predefinedStyle: {
        default: string;
        type: PropType<PredefinedStyle>;
    };
    clickable: {
        type: BooleanConstructor;
    };
    borderRadius: {
        default: string;
        type: PropType<string>;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    color: string;
    hoverColor: string;
    activeColor: string;
    textTransform: CSS.TextTransformProperty;
    textAlign: CSS.TextAlignProperty;
    padding: CSS.PaddingProperty<string | number>;
    borderRadius: string;
    clickable: boolean;
    fontSize: CSS.FontSizeProperty<string | number>;
    lineHeight: CSS.LineHeightProperty<string | number>;
    hoverBackground: string;
    activeBackground: string;
    whiteSpace: CSS.WhiteSpaceProperty;
    fontWeight: string | number;
    letterSpacing: CSS.LetterSpacingProperty<string | number>;
    fontFamily: string;
    predefinedStyle: PredefinedStyle;
}>;
export default _sfc_main;
