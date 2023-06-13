import type { Property } from "csstype";
import type { VNode, AllowedComponentProps, ComponentCustomProps, VNodeProps } from "vue";

export declare interface GridColumnProps {
  width?: Property.Width;
  height?: Property.Height;
  margin?: Property.Margin;
  rowGap?: Property.RowGap;
  padding?: Property.Padding;
  gridRow?: Property.GridRow;
  overflow?: Property.Overflow;
  boxShadow?: Property.BoxShadow;
  alignItems?: Property.AlignItems;
  gridColumn?: Property.GridColumn;
  alignContent?: Property.AlignContent;
  justifyItems?: Property.JustifyItems;
  borderRadius?: Property.BorderRadius;
  justifyContent?: Property.JustifyContent;
  gridTemplateRows?: Property.GridTemplateRows;
  backgroundColor?: Property.BackgroundColor | CustomColor;
}

export declare const IGridColumn: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & GridColumnProps;
  $slots: {
    default?: (({ Component }: { Component: VNode }) => VNode[]) | undefined;
  };
};
