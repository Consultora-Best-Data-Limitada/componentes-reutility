import type { DefineComponent } from "vue";

export type CustomMenu = DefineComponent<
  {
    disabled: {
      type: BooleanConstructor;
    };
    default: {
      type: BooleanConstructor;
      default: undefined;
    };
    nudgeTop: {
      default: 0;
      type: NumberConstructor;
    };
    nudgeBottom: {
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
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {
    close: void;
  }
>;
