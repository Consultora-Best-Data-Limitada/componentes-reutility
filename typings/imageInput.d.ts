import type { Property } from "csstype";
import type { DefineComponent, PropType } from "vue";

export type ImageInput = DefineComponent<
  {
    modelValue: {
      default: null;
      type: PropType<File | null>;
    };
    iconSize: {
      default: "1rem";
      type: PropType<Property.FontSize>;
    };
    borderRadius: {
      default: "initial";
      type: PropType<Property.BorderRadius>;
    };
    src: {
      default: null;
      type: PropType<string | null>;
    };
    width: {
      default: "1rem";
      type: PropType<Property.Width>;
    };
    height: {
      default: "1rem";
      type: PropType<Property.Height>;
    };
    objectFit: {
      default: "cover";
      type: PropType<Property.ObjectFit>;
    };
    objectPosition: {
      default: "initial";
      type: PropType<Property.ObjectPosition>;
    };
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {
    "error:extension": void;
    "update:model-value": void;
  }
>;
