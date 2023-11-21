import type { DefineComponent } from "vue";

export type TMessageDialog = DefineComponent<
  {
    icon: {
      required: true;
      type: StringConstructor;
    };
    title: {
      required: true;
      type: StringConstructor;
    };
    duration: {
      default: 3000;
      type: NumberConstructor;
    };
    opened: {
      required: true;
      type: BooleanConstructor;
    };
    subtitle: {
      default: "";
      type: StringConstructor;
    };
    iconClass: {
      type: StringConstructor;
      default: "text-acento-principal";
    };
  },
  {},
  {},
  {},
  {},
  {},
  {}
>;
