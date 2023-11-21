import type { DefineComponent } from "vue";

export type TConfirmationDialog = DefineComponent<
  {
    title: {
      required: true;
      type: StringConstructor;
    };
    subtitle: {
      default: "";
      type: StringConstructor;
    };
    opened: {
      required: true;
      type: BooleanConstructor;
    };
  },
  {},
  {},
  {},
  {},
  {},
  {}
>;
