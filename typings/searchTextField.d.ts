import type { DefineComponent } from "vue";

export type SearchTextField = DefineComponent<
  {
    placeholder: {
      type: StringConstructor;
      required: true;
    };
    modelValue: {
      default: "";
      type: StringConstructor;
    };
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {
    "update:model-value";
  }
>;
