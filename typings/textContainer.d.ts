import type { Property } from "csstype";
import type { VNode, AllowedComponentProps, ComponentCustomProps, VNodeProps } from "vue";

export declare interface TextContainerProps {
  clickable?: boolean;
  specialText?: string;
  padding?: Property.Padding;
  fontSize?: Property.FontSize;
  fontWeight?: string | number;
  textAlign?: Property.TextAlign;
  lineHeight?: Property.LineHeight;
  whiteSpace?: Property.WhiteSpace;
  fontFamily?: Property.FontFamily;
  predefinedStyle?: PredefinedStyle;
  color?: Property.Color | CustomColor;
  borderRadius?: Property.BorderRadius;
  textTransform?: Property.TextTransform;
  letterSpacing?: Property.LetterSpacing;
  hoverColor?: Property.Color | CustomColor;
  activeColor?: Property.Color | CustomColor;
  hoverBackground?: Property.BackgroundColor | CustomColor;
  activeBackground?: Property.BackgroundColor | CustomColor;
  "@click"?: (ev: MouseEvent) => void;
}

export declare const ITexContainer: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & TextContainerProps;
  $slots: {
    default?: (({ Component }: { Component: VNode }) => VNode[]) | undefined;
  };
};
