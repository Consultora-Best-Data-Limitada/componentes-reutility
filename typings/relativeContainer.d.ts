import type CSS from "csstype";
import type {VNode, AllowedComponentProps, ComponentCustomProps, VNodeProps} from "vue";

export declare interface RelativeContainerProps {
  width?: CSS.WidthProperty<string | number>;
  height?: CSS.HeightProperty<string | number>;
  margin?: CSS.MarginProperty<string | number>;
  padding?: CSS.PaddingProperty<string | number>;
  backgroundColor?: CSS.BackgroundColorProperty | CustomColor;
  borderRadius?: CSS.BorderRadiusProperty<string>;
  boxShadow?: CSS.BoxShadowProperty;
  overflow?: CSS.OverflowProperty;
}

export declare const IRelativeContainer: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & RelativeContainerProps;
  $slots: {
    default?: (({Component}: {
      Component: VNode;
    }) => VNode[]) | undefined;
  };
};
