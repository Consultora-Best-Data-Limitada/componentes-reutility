import type { Property } from "csstype";
import type { PropType, DefineComponent } from "vue";

export type FormTextField = DefineComponent<
  {
    modelValue: {
      default: "";
      type: [StringConstructor, NumberConstructor];
    };
    label: {
      type: StringConstructor;
      required: true;
    };
    placeholder: {
      type: StringConstructor;
      required: true;
    };
    errorMessage: {
      default: "";
      type: StringConstructor;
    };
    readonly: {
      type: BooleanConstructor;
    };
    dark: {
      type: BooleanConstructor;
    };
    disabled: {
      type: BooleanConstructor;
    };
    outlined: {
      type: BooleanConstructor;
    };
    clearable: {
      type: BooleanConstructor;
    };
    gridTemplateColumns: {
      default: "1fr 3fr";
      type: PropType<Property.GridTemplateColumns>;
    };
    type: {
      default: "text";
      type: PropType<"email" | "phone" | "text" | "time" | "password">;
    };
    mask: {
      default: "";
      type: StringConstructor;
    };
    maskTokens: {
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
    blur: void;
    keyup: void;
    input: void;
    focus: void;
    keydown: void;
    "update:model-value": void;
  }
>;
