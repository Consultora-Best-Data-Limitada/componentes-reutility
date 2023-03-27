import type CSS from "csstype";
import type {VNode, AllowedComponentProps, ComponentCustomProps, VNodeProps} from "vue";

export declare interface GridRowProps {
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
}

export declare const IGridRow: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & GridRowProps;
  $slots: {
    default?: (({Component}: {
      Component: VNode;
    }) => VNode[]) | undefined;
  };
};
