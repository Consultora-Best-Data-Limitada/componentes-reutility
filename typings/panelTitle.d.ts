import type { Property } from "csstype";
import type { VNode, AllowedComponentProps, ComponentCustomProps, VNodeProps } from "vue";

export declare interface PanelTitleProps {
  closable?: boolean;
  iconSize?: string;
  predefinedStyle?: PredefinedStyle;
  textColor?: CustomColor | Property.Color;
  backgroundColor?: CustomColor | Property.BackgroundColor;
  "@click:close"?: () => void;
}

export declare const IPanelTitle: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & PanelTitleProps;
  $slots: {
    default?: (({ Component }: { Component: VNode }) => VNode[]) | undefined;
  };
};
