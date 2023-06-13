import type { Property } from "csstype";
import type { VNode, AllowedComponentProps, ComponentCustomProps, VNodeProps } from "vue";

export declare interface AbsoluteContainerProps {
  top?: Property.Top;
  left?: Property.Left;
  width?: Property.Width;
  right?: Property.Right;
  height?: Property.Height;
  margin?: Property.Margin;
  bottom?: Property.Bottom;
  zIndex?: string | number;
  padding?: Property.Padding;
  overflow?: Property.Overflow;
  boxShadow?: Property.BoxShadow;
  transform?: Property.Transform;
  borderRadius?: Property.BorderRadius;
  backgroundColor?: Property.BackgroundColor | CustomColor;
}

export declare const IAbsoluteContainer: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & AbsoluteContainerProps;
  $slots: {
    default?: (({ Component }: { Component: VNode }) => VNode[]) | undefined;
  };
};
