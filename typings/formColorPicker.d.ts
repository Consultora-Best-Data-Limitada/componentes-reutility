import type { Property } from "csstype";
import type { PropType, DefineComponent } from "vue";

export type FormColorPicker = DefineComponent<
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
    large: {
      type: BooleanConstructor,
    },
    pickableColors: {
      default: undefined;
      type: PropType<string[]>;
    };
    label: {
      type: StringConstructor;
      required: true;
    };
    disabled: {
      type: BooleanConstructor;
    };
    readonly: {
      type: BooleanConstructor;
    };
    gridTemplateColumns: {
      default: "1fr 3fr";
      type: PropType<Property.GridTemplateColumns>;
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
