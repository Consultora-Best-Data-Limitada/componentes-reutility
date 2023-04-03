import type {VNode, AllowedComponentProps, ComponentCustomProps, VNodeProps} from "vue";
import type CSS from "csstype";

export declare interface PanelTitleProps {
  closable?: boolean;
  iconSize?: string;
  predefinedStyle?: PredefinedStyle;
  textColor?: CustomColor | CSS.ColorProperty;
  backgroundColor?: CustomColor | CSS.BackgroundColorProperty;
  "@click:close"?: () => void;
}

export declare const IPanelTitle: new () => {
  $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & PanelTitleProps;
  $slots: {
    default?: (({Component}: {
      Component: VNode;
    }) => VNode[]) | undefined;
  };
};
