import type CSS from "csstype";
import type {DefineComponent, VNode} from "vue";

declare const FlexContainer: DefineComponent<{
  padding?: CSS.PaddingProperty<string | number>;
  margin?: CSS.MarginProperty<string | number>;
  width?: CSS.WidthProperty<string | number>;
  height?: CSS.HeightProperty<string | number>;
  alignItems?: CSS.AlignItemsProperty;
  alignContent?: CSS.AlignContentProperty;
  justifyItems?: CSS.JustifyItemsProperty;
  flexDirection?: CSS.FlexDirectionProperty;
  justifyContent?: CSS.JustifyContentProperty;
  $slots: {
    default?: (({Component}: {
      Component: VNode;
    }) => VNode[]) | undefined;
  };
}>;
