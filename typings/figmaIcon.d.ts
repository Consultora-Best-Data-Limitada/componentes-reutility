import type { Property } from "csstype";
import type { PropType, DefineComponent } from "vue";

export type FigmaIcon = DefineComponent<{
  name: {
    type: StringConstructor;
    required: true;
  };
  color: {
    default: "black";
    type: PropType<Property.Color | CustomColor>;
  };
  size: {
    default: "1rem";
    type: PropType<Property.FontSize>;
  };
}>;
