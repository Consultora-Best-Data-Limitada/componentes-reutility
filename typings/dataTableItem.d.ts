import type { Property } from "csstype";
import type { PropType, DefineComponent } from "vue";

export type DataTableItem = DefineComponent<{
  disabled: {
    type: BooleanConstructor;
  };
  selected: {
    type: BooleanConstructor;
  };
  textTransform: {
    default: "initial";
    type: PropType<Property.TextTransform>;
  };
  textAlign: {
    default: "center";
    type: PropType<Property.TextAlign>;
  };
}>;
