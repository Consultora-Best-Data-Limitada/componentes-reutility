import type CSS from "csstype";
import type {DefineComponent, VNode} from "vue";

declare const GridRow: DefineComponent<{
  width?: CSS.WidthProperty<string | number>;
  backgroundColor?: CSS.BackgroundColorProperty | CustomColor;
  gridColumn?: CSS.GridColumnProperty;
  gridRow?: CSS.GridRowProperty;
  padding?: CSS.PaddingProperty<string | number>;
  columnGap?: CSS.ColumnGapProperty<string | number>;
  gridTemplateColumns?: CSS.GridTemplateColumnsProperty<string | number>;
  gridAutoColumns?: CSS.GridAutoColumnsProperty<string | number>;
  justifyContent?: CSS.JustifyContentProperty;
  alignItems?: CSS.AlignItemsProperty;
  height?: CSS.HeightProperty<string | number>;
  $slots: {
    default?: (({Component}: {
      Component: VNode;
    }) => VNode[]) | undefined;
  };
}>;
