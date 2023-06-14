import type { Property } from "csstype";
import type { PropType, DefineComponent } from "vue";

export type PanelTitle = DefineComponent<
  {
    closable: {
      type: BooleanConstructor;
    };
    iconSize: {
      type: StringConstructor;
      default: "1.5rem";
    };
    predefinedStyle: {
      default: "subtitle-2";
      type: PropType<PredefinedStyle>;
    };
    textColor: {
      default: "acento-principal";
      type: PropType<CustomColor | Property.Color>;
    };
    backgroundColor: {
      default: "initial";
      type: PropType<CustomColor | Property.BackgroundColor>;
    };
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {
    "click:close": void;
  }
>;
