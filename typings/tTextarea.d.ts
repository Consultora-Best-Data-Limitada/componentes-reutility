import type { DefineComponent } from "vue";

export type TTextarea = DefineComponent<
  {
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
      type: Boolean;
    };
    readonly: {
      type: Boolean;
    };
    disabled: {
      type: Boolean;
    };
    dark: {
      type: Boolean;
    };
    outlined: {
      type: Boolean;
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
