import type CSS from "csstype";
import type {VNode, AllowedComponentProps, ComponentCustomProps, VNodeProps} from "vue";

export declare interface GradientButtonProps {
  width?: CSS.WidthProperty<string | number>;
  height?: CSS.HeightProperty<string | number>;
  colorFrom?: CSS.ColorProperty | CustomColor;
  colorTo?: CSS.ColorProperty | CustomColor;
  textColor?: CSS.ColorProperty | CustomColor;
  disabled?: boolean;
  icon?: string;
  loading?: boolean;
  "@click"?: (ev: MouseEvent) => void;
}

export declare const IGradientButton: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & GradientButtonProps;
  $slots: {
    default?: (({Component}: {
      Component: VNode;
    }) => VNode[]) | undefined;
  };
};
