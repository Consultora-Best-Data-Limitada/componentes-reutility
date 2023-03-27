import type CSS from "csstype";
import type {AllowedComponentProps, ComponentCustomProps, VNodeProps, VNode} from "vue";

export declare interface CustomButtonProps {
  color?: CSS.ColorProperty | CustomColor;
  contentColor?: CSS.ColorProperty | CustomColor;
  hoverColor?: CSS.ColorProperty | CustomColor;
  activeColor?: CSS.ColorProperty | CustomColor;
  outlined?: boolean;
  width?: CSS.WidthProperty<string>;
  height?: CSS.HeightProperty<string>;
  disabled?: boolean;
  appendIcon?: string;
  preppendIcon?: string;
  justifyContent?: CSS.JustifyContentProperty;
  gridTemplateColumns?: CSS.GridTemplateColumnsProperty<string>;
  loading?: boolean;
  "@click"?: (ev: MouseEvent) => void;
}

export declare const ICustomButton: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & CustomButtonProps;
  $slots: {
    default?: (({Component}: {
      Component: VNode;
    }) => VNode[]) | undefined;
  };
};
