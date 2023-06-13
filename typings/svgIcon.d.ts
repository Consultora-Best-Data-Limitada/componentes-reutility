import type { Property } from "csstype";
import type { AllowedComponentProps, ComponentCustomProps, VNodeProps } from "vue";

export declare interface SvgIconProps {
  src: string;
  size?: Property.Width;
  color?: Property.Color | CustomColor;
}

export declare const ISvgIcon: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & SvgIconProps;
};
