import type { PropType, DefineComponent } from "vue";

export type TButton = DefineComponent<
  {
    color: {
      default: null;
      type: PropType<"acento-principal" | "acento-secundario" | "error" | null>;
    };
    outlined: {
      type: BooleanConstructor;
    };
    disabled: {
      type: BooleanConstructor;
    };
    text: {
      type: BooleanConstructor;
    };
    loading: {
      type: BooleanConstructor;
    }
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {
    click: void;
  }
>;
