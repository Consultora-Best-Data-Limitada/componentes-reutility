import type { Property } from "csstype";
import type { AllowedComponentProps, ComponentCustomProps, VNodeProps } from "vue";

export declare interface FontAwesomeIconProps {
  name: FigmaIconChoice;
  size: Property.FontSize;
  color?: Property.Color | CustomColor;
}

export declare const IFigmaIcon: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & FontAwesomeIconProps;
};
