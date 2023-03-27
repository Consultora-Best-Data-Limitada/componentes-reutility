import type CSS from "csstype";
import type { DefineComponent, VNode } from "vue";

declare const IconButton: DefineComponent<{
  color?: CSS.ColorProperty | CustomColor;
  icon: string;
  size?: CSS.WidthProperty<string>;
  disabled?: boolean;
  backgroundColor?: CSS.BackgroundColorProperty | CustomColor;
  containerSize?: CSS.WidthProperty<string>;
  "@click": (ev: MouseEvent) => void;
  $slots: {
    default?: (({Component}: {
      Component: VNode;
    }) => VNode[]) | undefined;
  };
}>;
