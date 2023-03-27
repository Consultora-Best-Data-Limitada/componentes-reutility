import type CSS from "csstype";
import type {DefineComponent} from "vue";

declare const SvgIcon: DefineComponent<{
  color?: CSS.ColorProperty | CustomColor;
  src?: string;
  name?: string;
  size?: CSS.WidthProperty<string | number>;
}>;
