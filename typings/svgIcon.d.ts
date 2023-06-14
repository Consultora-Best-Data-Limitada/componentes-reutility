import type { Property } from "csstype";
import type { PropType, DefineComponent } from "vue";

export type SvgIcon = DefineComponent<{
  color: {
    default: "black";
    type: PropType<Property.Color | CustomColor>;
  };
  src: {
    type: StringConstructor;
    required: true;
  };
  size: {
    default: "1.5rem";
    type: PropType<Property.Width>;
  };
}>;
