import type CSS from "csstype";
import type {VNode, AllowedComponentProps, ComponentCustomProps, VNodeProps} from "vue";

export declare interface GridColumnProps {
  alignContent?: CSS.AlignContentProperty;
  alignItems?: CSS.AlignItemsProperty;
  justifyContent?: CSS.JustifyContentProperty;
  justifyItems?: CSS.JustifyItemsProperty;
  width?: CSS.WidthProperty<string | number>;
  height?: CSS.HeightProperty<string | number>;
  margin?: CSS.MarginProperty<string | number>;
  rowGap?: CSS.RowGapProperty<string | number>;
  padding?: CSS.PaddingProperty<string | number>;
  gridRow?: CSS.GridRowProperty;
  gridColumn?: CSS.GridColumnProperty;
  gridTemplateRows?: CSS.GridTemplateRowsProperty<string | number>;
  backgroundColor?: CSS.BackgroundColorProperty | CustomColor;
  borderRadius?: CSS.BorderRadiusProperty<string>;
  boxShadow?: CSS.BoxShadowProperty;
  overflow?: CSS.OverflowProperty;
}

export declare const IGridColumn: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & GridColumnProps;
  $slots: {
    default?: (({Component}: {
      Component: VNode;
    }) => VNode[]) | undefined;
  };
};
