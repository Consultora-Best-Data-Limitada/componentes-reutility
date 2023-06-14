import type { Property } from "csstype";
import type { PropType, DefineComponent } from "vue";

export type ImageContainer = DefineComponent<
  {
    src: {
      type: StringConstructor;
      required: true;
    };
    alt: {
      type: StringConstructor;
      default: "Image";
    };
    objectPosition: {
      default: "initial";
      type: PropType<Property.ObjectPosition>;
    };
    width: {
      default: "initial";
      type: PropType<Property.Width>;
    };
    height: {
      default: "initial";
      type: PropType<Property.Height>;
    };
    objectFit: {
      default: "initial";
      type: PropType<Property.ObjectFit>;
    };
    aspectRatio: {
      default: "initial";
      type: PropType<Property.AspectRatio>;
    };
    clickable: {
      type: BooleanConstructor;
    };
    borderRadius: {
      default: "initial";
      type: PropType<Property.BorderRadius>;
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
