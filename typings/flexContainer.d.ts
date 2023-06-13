import type { Property } from "csstype";
import type { VNode, AllowedComponentProps, ComponentCustomProps, VNodeProps } from "vue";

export declare interface FlexContainerProps {
  width?: Property.Width;
  margin?: Property.Margin;
  height?: Property.Height;
  padding?: Property.Padding;
  alignItems?: Property.AlignItems;
  alignContent?: Property.AlignContent;
  justifyItems?: Property.JustifyItems;
  flexDirection?: Property.FlexDirection;
  justifyContent?: Property.JustifyContent;
}

export declare const IFlexContainer: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & FlexContainerProps;
  $slots: {
    default?: (({ Component }: { Component: VNode }) => VNode[]) | undefined;
  };
};
