import type { DefineComponent, PropType } from "vue";

export type CustomTextField = DefineComponent<
  {
    placeholder: {
      type: StringConstructor;
      required: true;
    };
    modelValue: {
      default: "";
      type: [StringConstructor, NumberConstructor];
    };
    clearable: {
      type: BooleanConstructor;
    };
    errorMessage: {
      default: "";
      type: StringConstructor;
    };
    disabled: {
      type: BooleanConstructor;
    };
    outlined: {
      type: BooleanConstructor;
    };
    readonly: {
      type: BooleanConstructor;
    };
    type: {
      default: "text";
      type: PropType<"email" | "phone" | "text" | "time" | "password">;
    };
    dark: {
      type: BooleanConstructor;
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
