import type { Property } from "csstype";
import type { DefineComponent, PropType } from "vue";

export type CustomButton = DefineComponent<
  {
    type: {
      default: "button";
      type: PropType<"button" | "submit" | "reset">;
    };
    color: {
      default: "#000000";
      type: PropType<Property.Color | CustomColor>;
    };
    contentColor: {
      default: "#ffffff";
      type: PropType<Property.Color | CustomColor>;
    };
    hoverColor: {
      default: "";
      type: PropType<Property.Color | CustomColor>;
    };
    activeColor: {
      default: "";
      type: PropType<Property.Color | CustomColor>;
    };
    outlined: {
      type: BooleanConstructor;
    };
    width: {
      default: "initial";
      type: PropType<Property.Width>;
    };
    height: {
      default: "2.5rem";
      type: PropType<Property.Height>;
    };
    disabled: {
      type: BooleanConstructor;
    };
    appendIcon: {
      default: "";
      type: StringConstructor;
    };
    preppendIcon: {
      default: "";
      type: StringConstructor;
    };
    justifyContent: {
      default: "center";
      type: PropType<Property.JustifyContent>;
    };
    justifyItems: {
      default: "initial";
      type: PropType<Property.JustifyItems>;
    };
    gridTemplateColumns: {
      default: "initial";
      type: PropType<Property.GridTemplateColumns>;
    };
    loading: {
      type: BooleanConstructor;
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
