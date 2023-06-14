import type { Property } from "csstype";
import type { PropType, DefineComponent } from "vue";

export type RelativeContainer = DefineComponent<{
  width: {
    default: "initial";
    type: PropType<Property.Width>;
  };
  height: {
    default: "initial";
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
}>;
