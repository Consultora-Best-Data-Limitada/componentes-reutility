import type CSS from "csstype";
import type {DefineComponent, VNode} from "vue";

declare const GridContainer: DefineComponent<{
  height?: CSS.HeightProperty<string | number>;
  alignItems?: CSS.AlignItemsProperty;
  alignContent?: CSS.AlignContentProperty;
  justifyContent?: CSS.JustifyContentProperty;
  justifyItems?: CSS.JustifyItemsProperty;
  gridTemplateRows?: CSS.GridTemplateRowsProperty<string | number>;
  rowGap?: CSS.RowGapProperty<string | number>;
  margin?: CSS.MarginProperty<string | number>;
  padding?: CSS.PaddingProperty<string | number>;
  gridTemplateColumns?: CSS.GridTemplateColumnsProperty<string | number>;
  columnGap?: CSS.ColumnGapProperty<string | number>;
  gridAutoFlow?: CSS.GridAutoFlowProperty;
  backgroundColor?: CSS.BackgroundColorProperty | CustomColor;
  borderRadius?: CSS.BorderRadiusProperty<string>;
  boxShadow?: CSS.BoxShadowProperty;
  $slots: {
    default?: (({Component}: {
      Component: VNode;
    }) => VNode[]) | undefined;
  };
}>;
