import type { Property } from "csstype";
import type { PropType, DefineComponent } from "vue";

export type IconButton = DefineComponent<
  {
    color: {
      default: "black";
      type: PropType<Property.Color | CustomColor>;
    };
    icon: {
      type: StringConstructor;
      required: true;
    };
    size: {
      default: "20px";
      type: PropType<Property.Width>;
    };
    disabled: {
      type: BooleanConstructor;
    };
    backgroundColor: {
      default: "";
      type: PropType<Property.BackgroundColor | CustomColor>;
    };
    containerSize: {
      default: "initial";
      type: PropType<Property.Width>;
    };
    borderRadius: {
      default: "1rem";
      type: PropType<Property.BorderRadius>;
    };
    inactive: {
      type: BooleanConstructor;
    };
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {
    click: void;
  }
>;
