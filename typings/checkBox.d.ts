import type { Property } from "csstype";
import type { PropType, DefineComponent } from "vue";

export type CheckBox = DefineComponent<
  {
    boxIcon: {
      type: StringConstructor;
      default: "fm-square-outlined";
    };
    boxColor: {
      default: "acento-principal";
      type: PropType<Property.Color | CustomColor>;
    };
    checkedColor: {
      default: "acento-principal";
      type: PropType<Property.Color | CustomColor>;
    };
    readonly: {
      type: BooleanConstructor;
    };
    disabled: {
      type: BooleanConstructor;
    };
    boxIconSize: {
      default: "1rem";
      type: PropType<Property.FontSize>;
    };
    checkedIcon: {
      default: "fm-square-check";
      type: StringConstructor;
    };
    checkedIconSize: {
      default: "1rem";
      type: PropType<Property.FontSize>;
    };
    modelValue: {
      type: BooleanConstructor;
      required: true;
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
