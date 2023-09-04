import type { Property } from "csstype";
import type { DefineComponent, PropType } from "vue";

export type TFormTextarea = DefineComponent<
  {
    name: {
      default: null;
      type: StringConstructor;
    }
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
