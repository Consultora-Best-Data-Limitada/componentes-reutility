import type { Property } from "csstype";
import type { PropType, DefineComponent } from "vue";

export type CustomChip = DefineComponent<
  {
    modelValue: {
      default: null;
      type: PropType<string | number | (string | number)[] | null>;
    };
    text: {
      required: true;
      type: PropType<string>;
    };
    value: {
      required: true;
      type: PropType<string | number>;
    };
    maxWidth: {
      default: "initial";
      type: PropType<Property.Width>;
    };
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {
    "update:model-value": void;
  }
>;
