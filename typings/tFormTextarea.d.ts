import type { Property } from "csstype";
import type { DefineComponent, PropType } from "vue";

export type TFormTextarea = DefineComponent<
  {
    modelValue: {
      default: "";
      type: StringConstructor;
    };
    label: {
      required: true;
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
