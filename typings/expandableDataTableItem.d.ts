import type { Property } from "csstype";
import type { PropType, DefineComponent } from "vue";

export type ExpandableDataTableItem = DefineComponent<{
  title: {
    required: true;
    type: PropType<string | number>;
  };
  opened: {
    type: BooleanConstructor;
  };
  textTransform: {
    default: "capitalize";
    type: PropType<Property.TextTransform>;
  };
  items: {
    required: true;
    type: PropType<string[] | Record<string, string | number>>;
  };
  showActiveStyle: {
    type: BooleanConstructor;
  };
  itemColor: {
    default: "neutro-4";
    type: PropType<Property.Color | CustomColor>;
  };
}>;
