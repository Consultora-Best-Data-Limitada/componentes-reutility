import type { Property } from "csstype";
import type { PropType, DefineComponent } from "vue";

export type FlexContainer = DefineComponent<{
  padding: {
    default: "initial";
    type: PropType<Property.Padding>;
  };
  margin: {
    default: "initial";
    type: PropType<Property.Margin>;
  };
  width: {
    default: "initial";
    type: PropType<Property.Width>;
  };
  height: {
    default: "initial";
    type: PropType<Property.Height>;
  };
  alignItems: {
    default: "initial";
    type: PropType<Property.AlignItems>;
  };
  alignContent: {
    default: "initial";
    type: PropType<Property.AlignContent>;
  };
  justifyItems: {
    default: "initial";
    type: PropType<Property.JustifyItems>;
  };
  flexDirection: {
    default: "row";
    type: PropType<Property.FlexDirection>;
  };
  justifyContent: {
    default: "initial";
    type: PropType<Property.JustifyContent>;
  };
}>;
