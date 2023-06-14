import type { Property } from "csstype";
import type { PropType, DefineComponent } from "vue";

export type AbsoluteContainer = DefineComponent<{
  width: {
    default: "initial";
    type: PropType<Property.Width>;
  };
  height: {
    default: "auto";
    type: PropType<Property.Height>;
  };
  margin: {
    default: "initial";
    type: PropType<Property.Margin>;
  };
  padding: {
    default: "initial";
    type: PropType<Property.Padding>;
  };
  backgroundColor: {
    default: "initial";
    type: PropType<Property.BackgroundColor | CustomColor>;
  };
  borderRadius: {
    default: "initial";
    type: PropType<Property.BorderRadius>;
  };
  boxShadow: {
    default: "initial";
    type: PropType<Property.BoxShadow>;
  };
  overflow: {
    default: "initial";
    type: PropType<Property.Overflow>;
  };
  top: {
    default: "initial";
    type: PropType<Property.Top>;
  };
  left: {
    default: "initial";
    type: PropType<Property.Left>;
  };
  right: {
    default: "initial";
    type: PropType<Property.Right>;
  };
  bottom: {
    default: "initial";
    type: PropType<Property.Bottom>;
  };
  transform: {
    default: "initial";
    type: PropType<Property.Transform>;
  };
  zIndex: {
    default: "initial";
    type: PropType<Property.ZIndex>;
  };
}>;
