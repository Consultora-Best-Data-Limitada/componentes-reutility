import type { Property } from "csstype";
import type {VNode, AllowedComponentProps, ComponentCustomProps, VNodeProps} from "vue";

export declare interface GradientButtonProps {
  icon?: string;
  loading?: boolean;
  disabled?: boolean;
  width?: Property.Width;
  height?: Property.Height;
  colorTo?: Property.Color | CustomColor;
  colorFrom?: Property.Color | CustomColor;
  textColor?: Property.Color | CustomColor;
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
