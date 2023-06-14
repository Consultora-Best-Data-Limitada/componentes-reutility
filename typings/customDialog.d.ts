import type { DefineComponent } from "vue";

export type CustomDialog = DefineComponent<
  {
    modelValue: {
      type: BooleanConstructor;
      required: true;
    };
    persistent: {
      type: BooleanConstructor;
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
