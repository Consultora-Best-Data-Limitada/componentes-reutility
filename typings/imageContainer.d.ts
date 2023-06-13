import type { Property } from "csstype";
import type { AllowedComponentProps, ComponentCustomProps, VNodeProps } from "vue";

export declare interface ImageContainerProps {
  src: string;
  alt?: string;
  clickable?: boolean;
  width?: Property.Width;
  height?: Property.Height;
  objectFit?: Property.ObjectFit;
  aspectRatio?: Property.AspectRatio;
  borderRadius?: Property.BorderRadius;
  objectPosition?: Property.ObjectPosition;
  "@click"?: (ev: MouseEvent) => void;
}

export declare const IImageContainer: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & ImageContainerProps;
};
