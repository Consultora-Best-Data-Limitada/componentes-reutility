import type CSS from "csstype";
import type {VNode, AllowedComponentProps, ComponentCustomProps, VNodeProps} from "vue";

export declare interface TextContainerProps {
  fontSize?: CSS.FontSizeProperty<string | number>;
  padding?: CSS.PaddingProperty<string | number>;
  lineHeight?: CSS.LineHeightProperty<string | number>;
  textAlign?: CSS.TextAlignProperty;
  textTransform?: CSS.TextTransformProperty;
  color?: CSS.ColorProperty | CustomColor;
  hoverColor?: CSS.ColorProperty | CustomColor;
  activeColor?: CSS.ColorProperty | CustomColor;
  hoverBackground?: CSS.BackgroundColorProperty | CustomColor;
  activeBackground?: CSS.BackgroundColorProperty | CustomColor;
  whiteSpace?: CSS.WhiteSpaceProperty;
  fontWeight?: string | number;
  letterSpacing?: CSS.LetterSpacingProperty<string | number>;
  fontFamily?: CSS.FontFamilyProperty;
  predefinedStyle?: PredefinedStyle;
  clickable?: boolea;
  borderRadius?: CSS.BorderRadiusProperty<string>;
  "@click"?: (ev: MouseEvent) => void;
}

export declare const ITexContainer: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & TextContainerProps;
  $slots: {
    default?: (({Component}: {
      Component: VNode;
    }) => VNode[]) | undefined;
  };
};
