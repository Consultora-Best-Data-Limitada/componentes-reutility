import type { DefineComponent } from "vue";
import { PropType } from "vue";

export type TMenu = DefineComponent<
  {
    disabled: {
      type: BooleanConstructor;
    };
    modelValue: {
      default: null;
      type: BooleanConstructor;
    };
    nudgeTop: {
      default: 0;
      type: NumberConstructor;
    };
    nudgeLeft: {
      default: 0;
      type: NumberConstructor;
    };
    nudgeRight: {
      default: 0;
      type: NumberConstructor;
    };
    nudgeBottom: {
      default: 0;
      type: NumberConstructor;
    };
    animation: {
      default: "animate-fade-down";
      type: StringConstructor;
    };
    position: {
      default: "bottom";
      type: PropType<"left" | "right" | "top" | "bottom">;
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
