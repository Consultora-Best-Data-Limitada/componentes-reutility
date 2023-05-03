import type CSS from "csstype";
import type {VNode, AllowedComponentProps, ComponentCustomProps, VNodeProps} from "vue";

export declare interface AbsoluteContainerProps {
  width?: CSS.WidthProperty<string | number>;
  height?: CSS.HeightProperty<string | number>;
  margin?: CSS.MarginProperty<string | number>;
  padding?: CSS.PaddingProperty<string | number>;
  backgroundColor?: CSS.BackgroundColorProperty | CustomColor;
  borderRadius?: CSS.BorderRadiusProperty<string>;
  boxShadow?: CSS.BoxShadowProperty;
  overflow?: CSS.OverflowProperty;
  top?: CSS.TopProperty<string>;
  right?: CSS.RightProperty<string>;
  bottom?: CSS.BottomProperty<string>;
  left?: CSS.LeftProperty<string>;
  transform?: CSS.TransformProperty;
  zIndex?: CSS.ZIndexProperty;
}

export declare const IAbsoluteContainer: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & AbsoluteContainerProps;
  $slots: {
    default?: (({Component}: {
      Component: VNode;
    }) => VNode[]) | undefined;
  };
};
