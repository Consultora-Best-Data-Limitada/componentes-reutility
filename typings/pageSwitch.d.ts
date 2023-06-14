import type { Property } from "csstype";
import type { PropType, DefineComponent } from "vue";

export type PageSwitch = DefineComponent<
  {
    modelValue: {
      type: BooleanConstructor;
      required: true;
    };
    label: {
      default: "";
      type: StringConstructor;
    };
    tooltip: {
      default: "";
      type: StringConstructor;
    };
    disabled: {
      type: BooleanConstructor;
    };
    activeColor: {
      default: "acento-principal";
      type: PropType<Property.Color | CustomColor>;
    };
    width: {
      default: "1.5rem";
      type: PropType<Property.Width>;
    };
    color: {
      default: "neutro-4";
      type: PropType<Property.Color | CustomColor>;
    };
    readonly: {
      type: BooleanConstructor;
    };
    labelWeight: {
      default: 600;
      type: PropType<Property.FontWeight>;
    };
    gridTemplateColumns: {
      default: "1fr auto";
      type: PropType<Property.GridTemplateColumns>;
    };
    justifyContent: {
      default: "initial";
      type: PropType<Property.JustifyContent>;
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
