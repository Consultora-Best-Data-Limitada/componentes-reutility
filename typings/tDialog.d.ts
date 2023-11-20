import type { DefineComponent } from "vue";

export type TDialog = DefineComponent<
  {
    modelValue: {
      type: BooleanConstructor;
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
  {}
>;
