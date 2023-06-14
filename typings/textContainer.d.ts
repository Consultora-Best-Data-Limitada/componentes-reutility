import type { Property } from "csstype";
import type { PropType, DefineComponent } from "vue";

export type TextContainer = DefineComponent<
  {
    fontSize: {
      default: "1rem";
      type: PropType<Property.FontSize>;
    };
    padding: {
      default: "initial";
      type: PropType<Property.Padding>;
    };
    lineHeight: {
      default: "1rem";
      type: PropType<Property.LineHeight>;
    };
    textAlign: {
      default: "initial";
      type: PropType<Property.TextAlign>;
    };
    textTransform: {
      default: "initial";
      type: PropType<Property.TextTransform>;
    };
    color: {
      default: "";
      type: PropType<Property.Color | CustomColor>;
    };
    hoverColor: {
      default: "";
      type: PropType<Property.Color | CustomColor>;
    };
    activeColor: {
      default: "#ffffff";
      type: PropType<Property.Color | CustomColor>;
    };
    hoverBackground: {
      default: "neutro-1";
      type: PropType<Property.BackgroundColor | CustomColor>;
    };
    activeBackground: {
      default: "neutro-3";
      type: PropType<Property.BackgroundColor | CustomColor>;
    };
    whiteSpace: {
      default: "initial";
      type: PropType<Property.WhiteSpace>;
    };
    fontWeight: {
      default: "initial";
      type: [StringConstructor, NumberConstructor];
    };
    letterSpacing: {
      default: "initial";
      type: PropType<Property.LetterSpacing>;
    };
    predefinedStyle: {
      default: "";
      type: PropType<PredefinedStyle>;
    };
    clickable: {
      type: BooleanConstructor;
    };
    borderRadius: {
      default: "initial";
      type: PropType<Property.BorderRadius>;
    };
    specialText: {
      default: "";
      type: StringConstructor;
    };
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {
    click: void;
  }
>;
