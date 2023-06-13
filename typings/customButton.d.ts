import type { Property } from "csstype";
import type { AllowedComponentProps, ComponentCustomProps, VNodeProps, VNode } from "vue";

export declare interface CustomButtonProps {
  loading?: boolean;
  outlined?: boolean;
  disabled?: boolean;
  width?: Property.Width;
  height?: Property.Height;
  color?: Property.Color | CustomColor;
  justifyItems?: Property.JustifyItems;
  appendIcon?: string | FigmaIconChoice;
  preppendIcon?: string | FigmaIconChoice;
  justifyContent?: Property.JustifyContent;
  hoverColor?: Property.Color | CustomColor;
  activeColor?: Property.Color | CustomColor;
  contentColor?: Property.Color | CustomColor;
  gridTemplateColumns?: Property.GridTemplateColumns;
  "@click"?: (ev: MouseEvent) => void;
}

export declare const ICustomButton: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & CustomButtonProps;
  $slots: {
    default?: (({ Component }: { Component: VNode }) => VNode[]) | undefined;
  };
};
