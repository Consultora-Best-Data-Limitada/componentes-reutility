import type { DefineComponent } from "vue";

export type TTextarea = DefineComponent<
  {
    name: {
      default: null;
      type: StringConstructor;
    };
    modelValue: {
      default: "";
      type: StringConstructor;
    };
    placeholder: {
      default: "";
      type: StringConstructor;
    };
    maxLength: {
      default: null;
      type: [NumberConstructor, StringConstructor];
    };
    showCounter: {
      type: BooleanConstructor;
    };
    readonly: {
      type: BooleanConstructor;
    };
    disabled: {
      type: BooleanConstructor;
    };
    dark: {
      type: BooleanConstructor;
    };
    outlined: {
      type: BooleanConstructor;
    };
    rows: {
      default: null;
      type: [NumberConstructor, StringConstructor];
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
