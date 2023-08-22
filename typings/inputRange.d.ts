import type { Property } from "csstype";
import type { PropType, DefineComponent } from "vue";

export type InputRange = DefineComponent<
  {
    modelValue: {
      required: true;
      type: NumberConstructor;
    };
    thumbColor: {
      default: "neutro-1";
      type: PropType<CustomColor | Property.Color>;
    };
    trackColor: {
      default: "neutro-1";
      type: PropType<CustomColor | Property.Color>;
    };
    progressColor: {
      default: "acento-principal";
      type: PropType<CustomColor | Property.Color>;
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
