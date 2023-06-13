import type { Property } from "csstype";
import type { VNode, AllowedComponentProps, ComponentCustomProps, VNodeProps } from "vue";

export declare interface GridContainerProps {
  height?: Property.Height;
  rowGap?: Property.RowGap;
  margin?: Property.Margin;
  padding?: Property.Padding;
  columnGap?: Property.ColumnGap;
  boxShadow?: Property.BoxShadow;
  alignItems?: Property.AlignItems;
  alignContent?: Property.AlignContent;
  justifyItems?: Property.JustifyItems;
  gridAutoFlow?: Property.GridAutoFlow;
  borderRadius?: Property.BorderRadius;
  justifyContent?: Property.JustifyContent;
  gridTemplateRows?: Property.GridTemplateRows;
  gridTemplateColumns?: Property.GridTemplateColumns;
  backgroundColor?: Property.BackgroundColor | CustomColor;
}

export declare const IGridContainer: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & GridContainerProps;
  $slots: {
    default?: (({ Component }: { Component: VNode }) => VNode[]) | undefined;
  };
};
