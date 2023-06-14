import type { DefineComponent } from "vue";

export type CustomTooltip = DefineComponent<{
  disabled: {
    type: BooleanConstructor;
  };
}>;
