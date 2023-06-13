import type { Property } from "csstype";
import type { VNode, AllowedComponentProps, ComponentCustomProps, VNodeProps } from "vue";

export declare interface GridRowProps {
  width?: Property.Width;
  height?: Property.Height;
  gridRow?: Property.GridRow;
  padding?: Property.Padding;
  columnGap?: Property.ColumnGap;
  gridColumn?: Property.GridColumn;
  alignItems?: Property.AlignItems;
  justifyContent?: Property.JustifyContent;
  gridAutoColumns?: Property.GridAutoColumns;
  gridTemplateColumns?: Property.GridTemplateColumns;
  backgroundColor?: Property.BackgroundColor | CustomColor;
}

export declare const IGridRow: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & GridRowProps;
  $slots: {
    default?: (({ Component }: { Component: VNode }) => VNode[]) | undefined;
  };
};
