import type { Property } from "csstype";
import type { DefineComponent, PropType } from "vue";

export type ConfirmationDialog = DefineComponent<
  {
    title: {
      type: StringConstructor;
      required: true;
    };
    subtitle: {
      default: "";
      type: StringConstructor;
    };
    modelValue: {
      type: BooleanConstructor;
      required: true;
    };
    width: {
      default: "520px";
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
    "click:no": void;
    "click:yes": void;
    "update:model-value": void;
  }
>;
