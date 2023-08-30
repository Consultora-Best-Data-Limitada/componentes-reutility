import type { Property } from "csstype";
import type { DefineComponent, PropType } from "vue";

export type CustomDialog = DefineComponent<
  {
    modelValue: {
      type: BooleanConstructor;
      required: true;
    };
    persistent: {
      type: BooleanConstructor;
    };
    margin: {
      default: "auto";
      type: PropType<Property.Margin>;
    };
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {
    "closed": void;
    "update:model-value": void;
  }
>;
