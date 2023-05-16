import type CSS from "csstype";
import type {VNode, AllowedComponentProps, ComponentCustomProps, VNodeProps} from "vue";

export declare interface IconButtonProps {
  color?: CSS.ColorProperty | CustomColor;
  icon: string | FigmaIconChoice;
  size?: CSS.WidthProperty<string>;
  disabled?: boolean;
  inactive?: boolean;
  backgroundColor?: CSS.BackgroundColorProperty | CustomColor;
  containerSize?: CSS.WidthProperty<string>;
  borderRadius?: CSS.BorderRadiusProperty<string>;
  "@click"?: (ev: MouseEvent) => void;
}

export declare const IIconButton: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & IconButtonProps;
  $slots: {
    default?: (({Component}: {
      Component: VNode;
    }) => VNode[]) | undefined;
  };
};
