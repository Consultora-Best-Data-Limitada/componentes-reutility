import type { Property } from "csstype";
import type { PropType, DefineComponent } from "vue";

export type InformationText = DefineComponent<{
  label: {
    type: StringConstructor;
    required: true;
  };
  gridTemplateColumns: {
    default: "1fr 3fr";
    type: PropType<Property.GridTemplateColumns>;
  };
  padding: {
    default: "0.75rem 0";
    type: PropType<Property.Padding>;
  };
  textTransform: {
    default: "capitalize";
    type: PropType<Property.TextTransform>;
  };
  color: {
    default: "secundario";
    type: PropType<Property.Color | CustomColor>;
  };
}>;
