import type { Property } from "csstype";
import type { PropType, DefineComponent } from "vue";

export type ColorPicker = DefineComponent<
  {
    modelValue: {
      type: StringConstructor;
      required: true;
    };
    background: {
      default: "neutro-1";
      type: PropType<Property.BackgroundColor | CustomColor>;
    };
    dark: {
      type: BooleanConstructor;
    };
    pickableColors: {
      type: PropType<string[]>;
      default: () => [];
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
