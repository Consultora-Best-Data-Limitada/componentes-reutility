import type { DefineComponent } from "vue";

export type TPagination = DefineComponent<
  {
    modelValue: {
      default: 1;
      type: NumberConstructor;
    };
    pageCount: {
      default: 1;
      type: NumberConstructor;
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
