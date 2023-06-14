import type { Property } from "csstype";
import type { PropType, DefineComponent } from "vue";

export type ExpansionPanel = DefineComponent<
  {
    outlined: {
      type: BooleanConstructor;
    };
    backgroundColor: {
      default: "neutro-1";
      type: PropType<CustomColor | Property.BackgroundColor>;
    };
    borderRadius: {
      default: "initial";
      type: PropType<Property.BorderRadius>;
    };
    modelValue: {
      default: undefined;
      type: BooleanConstructor;
    };
    transitionDuration: {
      default: "250ms";
      type: StringConstructor;
    };
    transitionTimingFunction: {
      default: "ease-in-out";
      type: PropType<Property.TransitionTimingFunction>;
    };
    boxShadow: {
      default: "initial";
      type: PropType<Property.BoxShadow>;
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
