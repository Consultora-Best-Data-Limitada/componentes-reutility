import type { Property } from "csstype";
import type { PropType, DefineComponent } from "vue";

export type ImageCropper = DefineComponent<
  {
    file: {
      required: true;
      type: PropType<File>;
    };
    width: {
      required: true;
      type: NumberConstructor;
    };
    height: {
      required: true;
      type: NumberConstructor;
    };
    buttonColor: {
      default: "neutro-1";
      type: PropType<CustomColor | Property.Color>;
    };
    thumbColor: {
      default: "neutro-1";
      type: PropType<CustomColor | Property.Color>;
    };
    trackColor: {
      default: "neutro-1";
      type: PropType<CustomColor | Property.Color>;
    };
    progressColor: {
      default: "acento-principal";
      type: PropType<CustomColor | Property.Color>;
    };
    tooltip: {
      type: StringConstructor;
      default: "Arrastre para recortar";
    };
  },
  {},
  {},
  {},
  {},
  {},
  {}
>;
