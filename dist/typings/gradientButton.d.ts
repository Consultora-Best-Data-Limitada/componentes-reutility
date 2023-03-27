import type CSS from "csstype";
import type { DefineComponent } from "vue";

declare const GradientButton: DefineComponent<{
  width?: CSS.WidthProperty<string | number>;
  height?: CSS.HeightProperty<string | number>;
  colorFrom?: CSS.ColorProperty | CustomColor;
  colorTo?: CSS.ColorProperty | CustomColor;
  textColor?: CSS.ColorProperty | CustomColor;
  disabled?: boolean;
  icon?: string;
  loading?: boolean;
  "@click": (ev: MouseEvent) => void;
}>;
