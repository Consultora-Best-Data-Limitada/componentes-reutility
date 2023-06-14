import type { Property } from "csstype";
import type { PropType, DefineComponent } from "vue";

export type HeaderTabs = DefineComponent<
  {
    items: {
      required: true;
      type: PropType<string[]>;
    };
    modelValue: {
      type: NumberConstructor;
      required: true;
    };
    columnGap: {
      default: "0.5rem";
      type: PropType<Property.ColumnGap>;
    };
    color: {
      default: "acento-principal";
      type: PropType<Property.BackgroundColor | CustomColor>;
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
