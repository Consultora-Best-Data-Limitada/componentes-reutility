import type { Property } from "csstype";
import type { VNode, AllowedComponentProps, ComponentCustomProps, VNodeProps } from "vue";

export declare interface RelativeContainerProps {
  width?: Property.Width;
  height?: Property.Height;
  margin?: Property.Margin;
  padding?: Property.Padding;
  overflow?: Property.Overflow;
  boxShadow?: Property.BoxShadow;
  borderRadius?: Property.BorderRadius;
  backgroundColor?: Property.BackgroundColor | CustomColor;
}

export declare const IRelativeContainer: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & RelativeContainerProps;
  $slots: {
    default?: (({ Component }: { Component: VNode }) => VNode[]) | undefined;
  };
};
