import type CSS from "csstype";
import type {DefineComponent} from "vue";

declare const FontAwesomeIcon: DefineComponent<{
  name: string;
  color?: CSS.ColorProperty | CustomColor;
  size: CSS.FontSizeProperty<string | number>
}>;
