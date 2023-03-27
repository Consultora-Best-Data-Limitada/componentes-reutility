import type CSS from "csstype";
import type {DefineComponent} from "vue";

declare const ImageContainer: DefineComponent<{
  src: string;
  alt?: string;
  objectPosition?: CSS.ObjectPositionProperty<string | number>;
  width?: CSS.WidthProperty<string | number>;
  height?: CSS.HeightProperty<string | number>;
  objectFit?: CSS.ObjectFitProperty;
  aspectRatio?: CSS.AspectRatioProperty;
  clickable?: boolean;
  "@click": (ev: MouseEvent) => void;
}>;
