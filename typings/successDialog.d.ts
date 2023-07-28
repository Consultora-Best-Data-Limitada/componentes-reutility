import type { Property } from "csstype";
import type { PropType, DefineComponent } from "vue";

export type SuccessDialog = DefineComponent<
  {
    icon: {
      type: StringConstructor;
      required: true;
    };
    text: {
      type: StringConstructor;
      required: true;
    };
    duration: {
      type: PropType<number | undefined>;
      default: 3000;
    };
    modelValue: {
      type: BooleanConstructor;
      required: true;
    };
    subtitle: {
      default: "";
      type: StringConstructor;
    };
    width: {
      default: "520px";
      type: PropType<Property.Width>;
    };
    iconColor: {
      default: "acento-principal";
      type: PropType<Property.Color | CustomColor>;
    };
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {
    close: void;
    "update:model-value": void;
  }
>;
