import type CSS from "csstype";
import type {AllowedComponentProps, ComponentCustomProps, VNodeProps} from "vue";

export declare interface ImageContainerProps {
  src: string;
  alt?: string;
  objectPosition?: CSS.ObjectPositionProperty<string | number>;
  width?: CSS.WidthProperty<string | number>;
  height?: CSS.HeightProperty<string | number>;
  objectFit?: CSS.ObjectFitProperty;
  aspectRatio?: CSS.AspectRatioProperty;
  clickable?: boolean;
  "@click"?: (ev: MouseEvent) => void;
}

export declare const IImageContainer: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & ImageContainerProps;
};
