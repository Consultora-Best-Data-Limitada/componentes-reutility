import type { Property } from "csstype";
import type { VNode, AllowedComponentProps, ComponentCustomProps, VNodeProps } from "vue";

export declare interface IconButtonProps {
  disabled?: boolean;
  inactive?: boolean;
  size?: Property.Width;
  icon: string | FigmaIconChoice;
  containerSize?: Property.Width;
  color?: Property.Color | CustomColor;
  borderRadius?: Property.BorderRadius;
  backgroundColor?: Property.BackgroundColor | CustomColor;
  "@click"?: (ev: MouseEvent) => void;
}

export declare const IIconButton: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & IconButtonProps;
  $slots: {
    default?: (({ Component }: { Component: VNode }) => VNode[]) | undefined;
  };
};
