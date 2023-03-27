import type CSS from "csstype";
import type {VNode, AllowedComponentProps, ComponentCustomProps, VNodeProps} from "vue";

export declare interface FlexContainerProps {
  padding?: CSS.PaddingProperty<string | number>;
  margin?: CSS.MarginProperty<string | number>;
  width?: CSS.WidthProperty<string | number>;
  height?: CSS.HeightProperty<string | number>;
  alignItems?: CSS.AlignItemsProperty;
  alignContent?: CSS.AlignContentProperty;
  justifyItems?: CSS.JustifyItemsProperty;
  flexDirection?: CSS.FlexDirectionProperty;
  justifyContent?: CSS.JustifyContentProperty;
}

export declare const IFlexContainer: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & FlexContainerProps;
  $slots: {
    default?: (({Component}: {
      Component: VNode;
    }) => VNode[]) | undefined;
  };
};

